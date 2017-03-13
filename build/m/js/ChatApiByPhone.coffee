class ChatApiByPhone extends ChatApiJoined

  constructor: (@user, @phone, config)->
    super(@user.token, config)

  start: (onStart) ->
    @loadUserInfo(@phone, ((toUser)->
      @startChatWithUser(toUser, (->
        @toUser = toUser
        @started = true
        onStart(toUser)
      ).bind(@))
    ).bind(@))

window.ChatApiByPhone = ChatApiByPhone

