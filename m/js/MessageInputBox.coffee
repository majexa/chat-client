class MessageInputBox
  constructor: (@chatBox) ->
    @container = new Element('div.messageInputBox').inject(@chatBox.answerBox)
    @input = new Element('textarea').inject(@container)
  disable: ->
    @input.set('disabled', true)
  enable: ->
    @input.set('disabled', false)
  cleanup: ->
    @input.set('value', '')
window.MessageInputBox = MessageInputBox