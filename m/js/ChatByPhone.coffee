class ChatByPhone extends ChatApi

  constructor: (user, @phone, config)->
    super(user, config)

  start: (onStart) ->
    @login((->
      @getUserInfo(@phone, ((toUser)->
        @startChatWithUser(toUser, ->
          onStart(toUser)
        )
      ).bind(@))
    ).bind(@))

  loginByPhone: (phone) ->
    @login(()->)
#    @getUserInfo(phone, ((toUser) ->
#      console.log @
#      return
#      @login((user) ->
#        @user = Object.assign(@user, user)
#        console.log @user
#      ).bind(@)
#    ).bind(@))



window.ChatByPhone = ChatByPhone

