Ngn.LoginDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  Implements: [Ngn.Dialog.RequestForm.Json.NoStartupRequest],
  options: {
    titleClose: false,
    cancel: false,
    okText: 'Logout',
    // @requiresBefore m/js/formTmpl/login.js
    formTmpl: Ngn.formTmpl.login,
    title: 'Auth',
    width: 200,
    onSubmitSuccess: function (r) {
      Ngn.Storage.set('token', r.token);
    },
    onOkClose: function() {
      window.location.reload(true);
    }
  }
});