class LoginBox

  constructor: (@parent) ->
    @createPhoneBox()
    @createCodeBox()


  titleBox: ->
    title = new Element('div.title');
    new Element('div', {html: 'Hi there! Welcome to'}).inject(title);
    new Element('img', {src: '/m/img/chat-w.svg'}).inject(title);
    return title

  createPhoneBox: ->
    @phoneBox = new Element('div.loginBox.phoneBox.form')
    @titleBox().inject(@phoneBox)
    new Element('p.label', { html: 'Phone:' }).inject(@phoneBox);
    new Element('span.input', {html:'+'}).inject(@phoneBox);
    @phoneInput = new Element('input', {
      value: '79202560776',
      name: 'phone',
      type: 'tel',
      maxlength: 11
    }).inject(@phoneBox)
    @sendCodeButton = new Element('button', {
      html: 'Send code to sms'
    }).inject(@phoneBox)
    new Element('button.pseudo', {
      html: 'I already have the code'
    }).addEvent('click', (()->
      @switchToCodeBox()
    ).bind(@)).inject(@phoneBox)

  createCodeBox: ->
    @codeBox = new Element('div.loginBox.codeBox.form')
    @titleBox().inject(@codeBox)
    new Element('p.label', {
      html: 'Input code has sent to you by SMS in field below:'
    }).inject(@codeBox)
    @codeInput = new Element('input', {
      name: 'code',
      type: 'number',
      maxlength: 4
    }).inject(@codeBox)
    @loginButton = new Element('button', {
      html: 'Login'
    }).inject(@codeBox)
    new Element('button.pseudo', {
      html: '&#8701; Go back to phone input'
    }).addEvent('click', (->
      @switchToLoginBox()
    ).bind(@)).inject(@codeBox)

  getPhone: ->
    return @phoneInput.get('value')

  getCode: ->
    return @codeInput.get('value')

  switchToCodeBox: ->
    if !@phoneInput.get('value')
      alert('Phone is required')
      return
    screens.changeScreen(@codeBox)

  switchToLoginBox: ->
    screens.changeScreen(@phoneBox, 'left')

window.LoginBox = LoginBox