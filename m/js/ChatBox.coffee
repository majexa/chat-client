class ChatBox
  constructor: (user, toUserId, chatId)->
    @userInfo = user
    @container = new Element('div.chatBox')
    @chatMessagesBox = new ChatMessagesBox(@)
    @answerBox = new Element('div.answerBox').inject(@container)
    new Element('div.authUser', {html: user.login}).inject(@answerBox)
    @messageInputBox = new MessageInputBox(@)
    @sendMessageButton = new SendMessageButton(@)
    # logic
    @chat = new Chat(user, toUserId, {
      baseUrl: 'http://185.98.87.28:8081'
    })
    if chatId
      console.log '>>> ' + chatId
      @chat.start(chatId)
    else
      @chat.start()
    @chat.bind('joined', (->
      #title.set('html', @chat.chatId)
    ).bind(@))
    @chat.bind('newMessage', ((data) ->
      @chatMessagesBox.addMessage(@chat.data.users[data.message.userId], data.message.message, data.message.createTime)
    ).bind(@))

#    @chat.bind('newUserMessages', ((data) ->
#      for i in [data.messages.length - 1..0] by -1
#        message = data.messages[i]
#        @chatMessagesBox._addMessage(
#          message.userId,
#          message.message,
#          message.createTime
#        )
#        @chatMessagesBox.scrollBottom()
#    ).bind(@))

    @chat.bind('historyLoaded', ((messages)->
      for i in [messages.length - 1..0] by -1
        message = messages[i]
        @chatMessagesBox.addMessage(
          @chat.data.users[message.userId] || ('USER' + message.userId),
          message.message,
          message.createTime
        )
      @chatMessagesBox.scrollBottom()
    ).bind(@))
  loadHistory: () ->

  sendMessage: () ->
    message = @messageInputBox.input.get('value')
    if !message
      return
    @messageInputBox.disable()
    @sendMessageButton.disable()
    @chat.sendMessage(message, (->
      @messageInputBox.cleanup()
      @messageInputBox.enable()
      @sendMessageButton.enable()
    ).bind(@))

window.ChatBox = ChatBox