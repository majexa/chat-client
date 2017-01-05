class LoginBox

  constructor: (@parent) ->
    @container = new Element('div.loginBox').inject(@parent)
    @createPhoneBox()
    @createCodeBox()
    @codeBox.setStyle('display', 'none')

  createPhoneBox: ->
    @phoneBox = new Element('div.phoneBox').inject(@container)
    @phoneInput = new Element('input', {
      placeholder: 'Phone Number',
      name: 'phone',
      type: 'number',
      maxlength: 11
    }).inject(@phoneBox)
    @sendCodeButton = new Element('button', {
      html: 'Send code to sms'
    }).inject(@phoneBox)
    new Element('a', {
      href: '#',
      html: '<p>I already have the code</p>'
    }).addEvent('click', ((e)->
      e.preventDefault()
      @switchToCodeBox()
    ).bind(@)).inject(@phoneBox)

  createCodeBox: ->
    @codeBox = new Element('div.codeBox').inject(@container)
    new Element('p', {
      html: 'Input code has sent to you by SMS in field below:'
    }).inject(@codeBox)
    @codeInput = new Element('input', {
      placeholder: 'Code',
      name: 'code',
      type: 'number',
      maxlength: 4
    }).inject(@codeBox)
    @loginButton = new Element('button', {
      html: 'Login'
    }).inject(@codeBox)
    new Element('a', {
      href: '#',
      html: '<p>Go back to phone input</p>'
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
    @phoneBox.setStyle('display', 'none')
    @codeBox.setStyle('display', 'block')

  switchToLoginBox: ->
    @phoneBox.setStyle('display', 'block')
    @codeBox.setStyle('display', 'none')

window.LoginBox = LoginBox