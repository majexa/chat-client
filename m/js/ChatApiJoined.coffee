class ChatApiJoined extends ChatApi

  startSocket: (token, chatId, onJoined) ->
    socket = super(token)
    @chatId = chatId
    called = false
    socket.on 'authenticated', (->
      @chatId = chatId
      socket.emit 'join',
        chatId: chatId
      if called
        return
      called = true
      onJoined()
    ).bind(@)
    return socket

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

window.ChatApiJoined = ChatApiJoined