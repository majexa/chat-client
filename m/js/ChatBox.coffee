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
    title.set('html', 'Chat with <b><span>' + toUser.login + '</span> +' + toUser.phone + '</b>')
    @chatMessagesBox = new ChatMessagesBox(@)
    @answerBox = new Element('div.answerBox').inject(@container)
    new Element('div.authUser', {html: user.login}).inject(@answerBox)
    @messageInputBox = new MessageInputBox(@)
    @sendMessageButton = new SendMessageButton(@)

window.ChatBox = ChatBox