class ChatApi

  constructor: (@user, @config) ->
    MicroEvent.mixin @

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

  startChatWithUser: (toUser, onComplete) ->
    new Request(
      url: @config.baseUrl + '/api/v1/chat/getOrCreateByTwoUsers'
      onComplete: ((chat) ->
        if !chat
          return
        chat = JSON.parse(chat)
        if chat.error
          throw new Error(chat.error)
        @data = chat
        @startSocket @user.token, chat.chatId, onComplete
      ).bind(@)
    ).get(
      token: @user.token
      userId: toUser._id
    )

  startChatById: (data, chatId) ->
    new Request(
      url: @config.baseUrl + '/api/v1/chat/get'
      onComplete: ((chat) ->
        if !chat
          return
        chat = JSON.parse(chat)
        if chat.error
          throw new Error(chat.error)
        @data = chat
        console.log('CHAT BY ID ' + chat.chatId);
        @startSocket data.token, chat.chatId
      ).bind(@)
    ).get(
      token: data.token
      chatId: chatId
    )

  startSocket: (token, chatId, onJoin) ->
    @token = token
    @chatId = chatId
    if @config.baseUrl
      socket = io.connect(@config.baseUrl)
    else
      socket = io.connect()
    @socket = socket
    socket.on 'connect', (->
      socket.emit 'authenticate',
        token: token
    ).bind(@)
    socket.on 'authenticated', (->
      @chatId = chatId
      socket.emit 'join',
        chatId: chatId
      onJoin()
    ).bind(@)
    .on 'event', ((data) ->
      console.log data
      @trigger data.type, data
    ).bind(@)
    .on 'unauthorized', (msg) ->
      console.log 'unauthorized: ' + JSON.stringify(msg.data)

  sendUserMessage: (message, userId,  onComplete) ->
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

  loadHistory: () ->
    new Request(
      url: @config.baseUrl + '/api/v1/message/list'
      onComplete: ((messages) ->
        messages = JSON.parse(messages)
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