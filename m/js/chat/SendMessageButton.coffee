class SendMessageButton

  constructor: (@chatBox) ->
    @button = new Element('button.sendMessage').inject(@chatBox.answerBox)
    @button.set 'html', 'Send'

  disable: ->
    @button.set 'disabled', true

  enable: ->
    @button.set 'disabled', false

window.SendMessageButton = SendMessageButton