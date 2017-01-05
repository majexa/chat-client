class ChatMessagesBox
  constructor: (@chatBox) ->
    @container = new Element('div.messagesBox').inject(@chatBox.container)
    @messageBoxes = {}
  addMessage: (userInfo, message) ->
    @_addMessage(userInfo, message)
    @scrollBottom()
  _addMessage: (userInfo, message) ->
    mine = @chatBox.userInfo._id == userInfo._id
    @messageBoxes[message._id] = new MessageBox(@, mine, userInfo, message)
  scrollBottom: () ->
    @container.scrollTop = @container.scrollHeight;

window.ChatMessagesBox = ChatMessagesBox