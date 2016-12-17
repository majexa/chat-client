class Chat extends ChatApi

  messages: []

  config: {
    baseUrl: ''
  }

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
