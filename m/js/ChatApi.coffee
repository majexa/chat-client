class ChatApi

  constructor: (@user, @config) ->
    if !@user
      throw new Error('user does not defined')
    MicroEvent.mixin @
    @initDeliveredLogic()

  restart: () ->
    @socket.disconnect()
    @socket.connect();

  getUserInfo: (phone, onComplete) ->
    new Request(
      url: @config.baseUrl + '/api/v1/user/info'
      onComplete: ((userInfo) ->
        userInfo = JSON.parse(userInfo)
        onComplete(userInfo)
      )
    ).get(
      phone: phone
    )

  login: (onComplete) ->
    new Request(
      url: @config.baseUrl + '/api/v1/login'
      onComplete: ((data) ->
        data = JSON.parse(data)
        if data.error
          throw new Error(data.error)
        @user = Object.assign(@user, data)
        onComplete()
      ).bind(@)
    ).get(@user)

  start: () ->
    throw new Error('abstract')

  startSocket: (token) ->
    @token = token
    if @config.baseUrl
      socket = io.connect(@config.baseUrl)
    else
      socket = io.connect()
    @socket = socket
    socket.on 'connect', (->
      socket.emit 'authenticate',
        token: token
    ).bind(@)
    .on 'event', ((data) ->
      console.log data
      @trigger data.type, data
    ).bind(@)
    .on 'unauthorized', (msg) ->
      console.log 'unauthorized: ' + JSON.stringify(msg.data)

  initDeliveredLogic: (chatId) ->
    # на уровне АПИ отмечаем как доставленные
    @bind('newUserMessages', ((data) ->
      @markAsDelivered(data.messages)
    ).bind(@))

  loadHistory: ->
    new Request(
      url: @config.baseUrl + '/api/v1/message/list'
      onComplete: ((messages) ->
        messages = JSON.parse(messages)
        if messages.length == 0
          return
        @markAsDelivered(messages)
        @trigger 'historyLoaded', messages
      ).bind(@)
    ).get(
      token: @token
      chatId: @chatId
    )

  sendMessage: (message, onComplete) ->
    if !@chatId
      throw new Error('Chat has not started')
    new Request(
      url: @config.baseUrl + '/api/v1/message/send',
      onComplete: onComplete
    ).get(
      token: @token
      chatId: @chatId
      message: message
    )

  sendUserMessage: (message, userId, onComplete) ->
    if !@chatId
      throw new Error('Chat has not started')
    new Request(
      url: @config.baseUrl + '/api/v1/message/userSend',
      onComplete: onComplete
    ).get(
      token: @token
      userId: userId
      chatId: @chatId
      message: message
    )

  loadUserInfo: (userId, onComplete) ->
    if userId == 'undefined'
      throw new Error('!');
    new Request(
      url: @config.baseUrl + '/api/v1/user/info'
      onComplete: (data)->
        data = JSON.parse(data)
        onComplete(data)
    ).get(
      id: userId
    )

  markAsDelivered: (messages) ->
    @markAs('delivered', messages)

  markAsViewed: (messages) ->
    @markAs('viewed', messages)

  ucFirst: (str) ->
    f = str.charAt(0).toUpperCase()
    return f + str.substr(1, str.length-1)

  markAs: (keyword, messages) ->
    messages = messages.filter((message)->
      return !message[keyword]
    )
    if messages.length == 0
      return
    # arrange by chatId
    arrangedMessages = {}
    for message in messages
      if !message.chatId
        throw new Error('message.chatId is required')
      if !arrangedMessages[message.chatId]
        arrangedMessages[message.chatId] = []
      arrangedMessages[message.chatId].push(message)
    # emit separately by chat
    eventType = 'markAs' + @ucFirst(keyword)
    console.log eventType
    for chatId, messages of arrangedMessages
      messageIds = messages.map((message)->
        return message._id
      )
      @socket.emit eventType,
        messageIds: messageIds.join(',')
        chatId: chatId

ChatApi.tts = (timestamp) ->
  date = new Date(timestamp)
  hours = date.getHours()
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  minutes = "0" + date.getMinutes()
  formattedTime = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + hours + ':' + minutes.substr(-2)
  return formattedTime

window.ChatApi = ChatApi