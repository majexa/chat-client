class SendMessageButton
  constructor: (@chatBox) ->
    @button = new Element('button.sendMessage').inject(@chatBox.answerBox)
    @button.set 'html', 'send'
    @button.addEvent('click', (->
      @chatBox.sendMessage()
    ).bind(@))
  disable: ->
    @button.set 'disabled', true
  enable: ->
    @button.set 'disabled', false

window.SendMessageButton = SendMessageButton