class ChatApiByPhone extends ChatApiJoined

  constructor: (user, @phone, config)->
    super(user, config)

  start: (onStart) ->
    @login((->
      @getUserInfo(@phone, ((toUser)->
        @startChatWithUser(toUser, (->
          @toUser = toUser
          @started = true
          onStart(toUser)
        ).bind(@))
      ).bind(@))
    ).bind(@))

window.ChatApiByPhone = ChatApiByPhone

