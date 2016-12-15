class Standby

  messages: []
  config: {
    baseUrl: ''
  }

  constructor: (@userInfo, config) ->
    MicroEvent.mixin @
    Object.assign @config, config

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
    socket.on 'authenticated', (->
      #this.sendMessage()
    ).bind(@)
    .on 'event', ((data) ->
      console.log data
      @trigger data.type, data
    ).bind(@)

  start: () ->
    new Request(
      url: @config.baseUrl + '/api/v1/login'
      onComplete: ((data) ->
        data = JSON.parse(data)
        if data.error
          throw new Error(data.error)
        console.log('start socket for ' + data._id);
        @startSocket data.token
      ).bind(@)
    ).get(@userInfo)

  sendMessage: (message, onComplete) ->
    new Request(
      url: @config.baseUrl + '/api/v1/message/userSend',
      onComplete: onComplete
    ).get(
      token: @token

      message: message
    )

window.Standby = Standby
