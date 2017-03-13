// Generated by CoffeeScript 1.12.0
(function() {
  var SendMessageButton;

  SendMessageButton = (function() {
    function SendMessageButton(chatBox) {
      this.chatBox = chatBox;
      this.button = new Element('button.sendMessage').inject(this.chatBox.answerBox);
      this.button.set('html', 'Send');
    }

    SendMessageButton.prototype.disable = function() {
      return this.button.set('disabled', true);
    };

    SendMessageButton.prototype.enable = function() {
      return this.button.set('disabled', false);
    };

    return SendMessageButton;

  })();

  window.SendMessageButton = SendMessageButton;

}).call(this);

//# sourceMappingURL=SendMessageButton.js.map
