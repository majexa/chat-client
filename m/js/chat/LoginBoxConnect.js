// Generated by CoffeeScript 1.11.1
(function() {
  var LoginBoxConnect;

  LoginBoxConnect = (function() {
    function LoginBoxConnect(chatApi, loginBox) {
      this.chatApi = chatApi;
      this.loginBox = loginBox;
      this.initPhoneBox();
      this.initLoginBox();
    }

    LoginBoxConnect.prototype.initPhoneBox = function() {
      return this.loginBox.sendCodeButton.addEvent('click', (function() {
        return this.chatApi.request('sendCode', {
          phone: this.loginBox.getPhone()
        }, (function(data) {
          if (data.success) {
            return this.loginBox.switchToCodeBox();
          } else {
            return alert(data.error);
          }
        }).bind(this));
      }).bind(this));
    };

    LoginBoxConnect.prototype.initLoginBox = function() {
      return this.loginBox.loginButton.addEvent('click', (function() {
        return this.chatApi.request('login', {
          phone: this.loginBox.getPhone(),
          code: this.loginBox.getCode(),
          device: 'android'
        }, (function(user) {
          Ngn.LocalStorage.json.set('user', user);
          return window.location.reload(true);
        }).bind(this));
      }).bind(this));
    };

    return LoginBoxConnect;

  })();

  window.LoginBoxConnect = LoginBoxConnect;

}).call(this);

//# sourceMappingURL=LoginBoxConnect.js.map
