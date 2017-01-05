class ChatApiBasic

  constructor: (@config) ->

  request: (path, request, onComplete) ->
    new Request(
      url: @config.baseUrl + '/api/v1/' + path
      onComplete: ((data) ->
        data = JSON.parse(data)
        if data.error
          throw new Error(data.error)
        onComplete(data)
      ).bind(@)
    ).get(request)

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
      msg.data.token = token
      console.error msg.data

window.ChatApiBasic = ChatApiBasic