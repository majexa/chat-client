class ChatApiStandby extends ChatApi

  constructor: (user, config) ->
    if !user.token
      console.error user
      throw new Error('user object must have token param');
    super(user.token, config)

  start: (onStart) ->
    @startSocket(@token, onStart)

  startSocket: (token, onAuthenticated) ->
    socket = super(token)
    socket.on 'authenticated', ->
      onAuthenticated()

window.ChatApiStandby = ChatApiStandby
