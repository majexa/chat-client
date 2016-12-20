class MessageBox

  constructor: (@chatMessageBox, mine, userInfo, @message) ->
    @container = new Element('div.messageBox').inject(@chatMessageBox.container, 'bottom')
    new Element('div.time', {html: ChatApi.tts(@message.createTime)}).inject(@container)
    @mark = new Element('div.mark').inject(@container)
    eText = new Element('div.text', {html: @message.message}).inject(@container)

    if mine
      @container.addClass('mine')
      new Element('div.arrow.right').inject(eText);
    else
      new Element('div.arrow.left').inject(eText);

    if @message.delivered
      @markAsDelivered()

  markAsDelivered: ->
    @mark.set('title', 'Delivered')
    @mark.set('html', '&#10004;')

window.MessageBox = MessageBox