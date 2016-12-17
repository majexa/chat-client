class ChatMessagesBox
  constructor: (@chatBox) ->
    @container = new Element('div.messagesBox').inject(@chatBox.container)
  addMessage: (userInfo, text, timestamp) ->
    @_addMessage(userInfo, text, timestamp)
    @scrollBottom()
  _addMessage: (userInfo, text, timestamp) ->
    mine = @chatBox.userInfo._id == userInfo._id
    new MessageBox(@, mine, userInfo, text, timestamp)
  scrollBottom: () ->
    @container.scrollTop = @container.scrollHeight;

window.ChatMessagesBox = ChatMessagesBox