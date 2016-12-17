class ChatBox

  constructor: (parent)->
    @container = new Element('div.chatBox').inject(parent)

  build: (user, toUser, chatTitle) ->
    @userInfo = user
    title = new Element('div.titleBox').inject(@container)
    if chatTitle
      chatTitle = '<span class="chatTitle">' + chatTitle + '</span>'
    else
      chatTitle = ''
    title.set('html', 'Chat with <b>' + toUser.login + '</b>' + chatTitle)
    @chatMessagesBox = new ChatMessagesBox(@)
    @answerBox = new Element('div.answerBox').inject(@container)
    new Element('div.authUser', {html: user.login}).inject(@answerBox)
    @messageInputBox = new MessageInputBox(@)
    @sendMessageButton = new SendMessageButton(@)


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



#  loadToUser: (toUserId) ->
#    new Request(
#      url: @config.baseUrl + '/api/v1/message/list'
#      onComplete: ((messages) ->
#        messages = JSON.parse(messages)
#        console.log ['history', messages]
#        @trigger 'historyLoaded', messages
#      ).bind(@)
#    ).get(
#    token: @token
#    chatId: @chatId
#  )
#


window.ChatBox = ChatBox