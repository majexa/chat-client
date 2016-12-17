// Generated by CoffeeScript 1.11.1
(function() {
  var MessageInputBox;

  MessageInputBox = (function() {
    function MessageInputBox(chatBox) {
      this.chatBox = chatBox;
      this.container = new Element('div.messageInputBox').inject(this.chatBox.answerBox);
      this.input = new Element('textarea').inject(this.container);
    }

    MessageInputBox.prototype.disable = function() {
      return this.input.set('disabled', true);
    };

    MessageInputBox.prototype.enable = function() {
      return this.input.set('disabled', false);
    };

    MessageInputBox.prototype.cleanup = function() {
      return this.input.set('value', '');
    };

    return MessageInputBox;

  })();

  window.MessageInputBox = MessageInputBox;

}).call(this);

//# sourceMappingURL=MessageInputBox.js.map
