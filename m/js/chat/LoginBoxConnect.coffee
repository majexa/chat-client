class LoginBoxConnect

  constructor: (@chatApi, @loginBox) ->
    @initPhoneBox()
    @initLoginBox()

  initPhoneBox: ->
    @loginBox.sendCodeButton.addEvent('click', (->
      @chatApi.request('sendCode', {
        phone: @loginBox.getPhone()
      }, ((data)->
        if data.success
          @loginBox.switchToCodeBox()
        else
          alert(data.error)
      ).bind(@))
    ).bind(@))

  initLoginBox: ->
    @loginBox.loginButton.addEvent('click', (->
      @chatApi.request('login', {
        phone: @loginBox.getPhone(),
        code: @loginBox.getCode(),
        device: 'android'
      }, ((user)->
        Ngn.LocalStorage.json.set('user', user)
        window.location.reload(true)
      ).bind(@))
    ).bind(@))

window.LoginBoxConnect = LoginBoxConnect