class ChatApiStandby extends ChatApi

  start: (onStart) ->
    @login((->
      @startSocket(@user.token, onStart)
    ).bind(@))

  startSocket: (token, onAuthenticated) ->
    socket = super(token)
    socket.on 'authenticated', ->
      onAuthenticated()

window.ChatApiStandby = ChatApiStandby
