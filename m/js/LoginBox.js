// Generated by CoffeeScript 1.11.1
(function() {
  var LoginBox;

  LoginBox = (function() {
    function LoginBox(parent) {
      this.parent = parent;
      this.container = new Element('div.loginBox').inject(this.parent);
      this.createPhoneBox();
      this.createCodeBox();
      this.codeBox.setStyle('display', 'none');
    }

    LoginBox.prototype.createPhoneBox = function() {
      this.phoneBox = new Element('div.phoneBox').inject(this.container);
      this.phoneInput = new Element('input', {
        placeholder: 'Phone Number',
        name: 'phone',
        type: 'number',
        maxlength: 11
      }).inject(this.phoneBox);
      this.sendCodeButton = new Element('button', {
        html: 'Send code to sms'
      }).inject(this.phoneBox);
      return new Element('a', {
        href: '#',
        html: '<p>I already have the code</p>'
      }).addEvent('click', (function(e) {
        e.preventDefault();
        return this.switchToCodeBox();
      }).bind(this)).inject(this.phoneBox);
    };

    LoginBox.prototype.createCodeBox = function() {
      this.codeBox = new Element('div.codeBox').inject(this.container);
      new Element('p', {
        html: 'Input code has sent to you by SMS in field below:'
      }).inject(this.codeBox);
      this.codeInput = new Element('input', {
        placeholder: 'Code',
        name: 'code',
        type: 'number',
        maxlength: 4
      }).inject(this.codeBox);
      this.loginButton = new Element('button', {
        html: 'Login'
      }).inject(this.codeBox);
      return new Element('a', {
        href: '#',
        html: '<p>Go back to phone input</p>'
      }).addEvent('click', (function() {
        return this.switchToLoginBox();
      }).bind(this)).inject(this.codeBox);
    };

    LoginBox.prototype.getPhone = function() {
      return this.phoneInput.get('value');
    };

    LoginBox.prototype.getCode = function() {
      return this.codeInput.get('value');
    };

    LoginBox.prototype.switchToCodeBox = function() {
      if (!this.phoneInput.get('value')) {
        alert('Phone is required');
        return;
      }
      this.phoneBox.setStyle('display', 'none');
      return this.codeBox.setStyle('display', 'block');
    };

    LoginBox.prototype.switchToLoginBox = function() {
      this.phoneBox.setStyle('display', 'block');
      return this.codeBox.setStyle('display', 'none');
    };

    return LoginBox;

  })();

  window.LoginBox = LoginBox;

}).call(this);

//# sourceMappingURL=LoginBox.js.map
