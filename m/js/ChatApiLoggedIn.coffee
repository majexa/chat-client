class ChatApiLoggedIn extends ChatApi

  start: (onStart) ->
    @login((->
      @startSocket(@token, onStart)
    ).bind(@))

  startSocket: (token, onAuthenticated) ->
    socket = super(token)
    socket.on 'authenticated', ->
      onAuthenticated()

window.ChatApiStandby = ChatApiStandby
