class MessageBox
  constructor: (@chatMessageBox, mine, userInfo, @text, timestamp) ->
    @container = new Element('div.messageBox').inject(@chatMessageBox.container, 'bottom')
    if mine
      @container.addClass('mine')
    new Element('div.time', {html: ChatApi.tts(timestamp)}).inject(@container)
    eMark = new Element('div.mark', {html: '&#10004;'}).inject(@container)
    #new Element('div.user', {html: userInfo.login}).inject(@container)
    eText = new Element('div.text', {html: @text}).inject(@container)
    if mine
      new Element('div.arrow.right').inject(eText);
    else
      new Element('div.arrow.left').inject(eText);

window.MessageBox = MessageBox