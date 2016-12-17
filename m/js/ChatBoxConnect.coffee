class ChatBoxConnect

  constructor: (@chatApi, @chatBox) ->

  start: ->
    @chatApi.start(((toUser) ->
      # startup data for init socket events and interface has loaded
      @toUser = toUser
      @initUsers()
      @chatBox.build(@chatApi.user, toUser, @chatApi.chatId)
      @chatApi.loadHistory()
      @bindHistoryEvent()
      # @initSocketEvent()
      # @bindNewUserMessagesEvent()
      @bindNewMessageEvent()
      @bindSendButton()
    ).bind(@))
    
  initUsers: ->
    @users = {}
    @users[@chatApi.user._id] = @chatApi.user
    @users[@toUser._id] = @toUser

  bindNewUserMessagesEvent: ->
    @chatApi.bind('newUserMessages', ((data) ->
      for message in data.messages
      #for i in [data.messages.length - 1..0] by -1
        #message = data.messages[i]
        @chatBox.chatMessagesBox._addMessage(
          message.userId,
          message.message,
          message.createTime
        )
        @chatBox.chatMessagesBox.scrollBottom()
    ).bind(@))

  bindNewMessageEvent: ->
    @chatApi.bind('newMessage', ((data) ->
      @chatBox.chatMessagesBox.addMessage(@users[data.message.userId], data.message.message, data.message.createTime)
    ).bind(@))

  bindHistoryEvent: ->
    @chatApi.bind('historyLoaded', ((messages)->
      for i in [messages.length - 1..0] by -1
        message = messages[i]
        @chatBox.chatMessagesBox.addMessage(
          @users[message.userId],
          message.message,
          message.createTime
        )
      setTimeout((->
        @chatBox.chatMessagesBox.scrollBottom()
      ).bind(@), 1000)

    ).bind(@))

  bindSendButton: ->
    @chatBox.sendMessageButton.button.addEvent('click', (->
      @sendMessage()
    ).bind(@))

  sendMessage: () ->
    message = @chatBox.messageInputBox.input.get('value')
    if !message
      return
    @chatBox.messageInputBox.disable()
    @chatBox.sendMessageButton.disable()
    @chatApi.sendMessage(message, (->
      @chatBox.messageInputBox.cleanup()
      @chatBox.messageInputBox.enable()
      @chatBox.sendMessageButton.enable()
    ).bind(@))

window.ChatBoxConnect = ChatBoxConnect