class Chat
  messages: []
  config: {
    baseUrl: ''
  }
  constructor: (@userInfo, @toUserId, config) ->
    MicroEvent.mixin @
    Object.assign @config, config

  restart: () ->
    @socket.disconnect()
    @socket.connect();

  startSocket: (token, chatId) ->
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
    ).bind(@)
    .on 'event', ((data) ->
      console.log data
      @trigger data.type, data
      if data.type == 'joined'
        @loadHistory()
    ).bind(@)
    .on 'unauthorized', (msg) ->
      console.log 'unauthorized: ' + JSON.stringify(msg.data)

  loadHistory: () ->
    new Request(
      url: @config.baseUrl + '/api/v1/message/list'
      onComplete: ((messages) ->
        messages = JSON.parse(messages)
        console.log ['history', messages]
        @trigger 'historyLoaded', messages
      ).bind(@)
    ).get(
      token: @token
      chatId: @chatId
    )

  start: (chatId) ->
    new Request(
      url: @config.baseUrl + '/api/v1/login'
      onComplete: ((data) ->
        data = JSON.parse(data)
        if data.error
          throw new Error(data.error)
        if chatId
          @startChatById(data, chatId)
        else
          @startChat(data)
      ).bind(@)
    ).get(@userInfo)

  startChat: (data) ->
    new Request(
      url: @config.baseUrl + '/api/v1/chat/getOrCreateByTwoUsers'
      onComplete: ((chat) ->
        if !chat
          return
        chat = JSON.parse(chat)
        if chat.error
          throw new Error(chat.error)
        @data = chat
        console.log('CHAT ' + chat.chatId);
        @startSocket data.token, chat.chatId
      ).bind(@)
    ).get(
      token: data.token
      fromUserId: data._id
      toUserId: @toUserId
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

  sendUserMessage: (message, onComplete) ->
    if !@chatId
      throw new Error('Chat has not started')
    new Request(
      url: @config.baseUrl + '/api/v1/message/userSend',
      onComplete: onComplete
    ).get(
      token: @token
      userId: @toUserId
      chatId: @chatId
      message: message
    )

Chat.tts = (timestamp) ->
  date = new Date(timestamp)
  hours = date.getHours()
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  minutes = "0" + date.getMinutes()
  formattedTime = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + hours + ':' + minutes.substr(-2)
  return formattedTime

window.Chat = Chat
