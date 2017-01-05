Ngn.Dialog.RequestForm.Json = new Class({
  Extends: Ngn.Dialog.RequestForm,
  options: {
    jsonRequest: true,
    title: false
  },
  initialize: function(options) {
    this.parent(options);
    this.toggle('ok', true);
  },
  urlResponse: function (data) {
    this.parent({
      form: Ngn.Tmpl(this.options.formTmpl, data)
    });
    this.toggle('ok', true);
  },
  initFailedEvent: function() {
    this.form.addEvent('failed', function(r) {
      this.loading(false);
    }.bind(this));
  }
});

Ngn.Dialog.RequestForm.Json.NoStartupRequest = new Class({
  makeStartupRequest: function () {
    this.urlResponse({
    });
  }
});

Ngn.LoginDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  Implements: [Ngn.Dialog.RequestForm.Json.NoStartupRequest],
  options: {
    titleClose: false,
    cancel: false,
    okText: 'Login',
    // @requiresBefore m/js/formTmpl/login.js
    formTmpl: Ngn.formTmpl.login,
    title: 'Login',
    width: 200,
    onSubmitSuccess: function (r) {
      Ngn.Storage.set('token', r.token);
    },
    onOkClose: function() {
      window.location.reload(true);
    }
  }
});