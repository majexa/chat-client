class MessageBox
  constructor: (@chatMessageBox, userInfo, @text, timestamp) ->
    console.log userInfo
    @container = new Element('div.messageBox').inject(@chatMessageBox.container, 'bottom')
    new Element('div.time', {html: Chat.tts(timestamp)}).inject(@container)
    new Element('div.user', {html: userInfo.login}).inject(@container)
    new Element('div.text', {html: @text}).inject(@container)

window.MessageBox = MessageBox