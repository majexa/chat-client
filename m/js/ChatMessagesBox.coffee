class ChatMessagesBox
  constructor: (@chatBox) ->
    @container = new Element('div.messagesBox').inject(@chatBox.container)
  addMessage: (userInfo, text, timestamp) ->
    @_addMessage(userInfo, text, timestamp)
    @scrollBottom()
  _addMessage: (userInfo, text, timestamp) ->
    new MessageBox(@, userInfo, text, timestamp)

  scrollBottom: () ->
    new Fx.Scroll(@container).toBottom();

window.ChatMessagesBox = ChatMessagesBox