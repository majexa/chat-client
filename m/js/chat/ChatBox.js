// Generated by CoffeeScript 1.11.1
(function() {
  var ChatBox;

  ChatBox = (function() {
    function ChatBox(parent) {
      this.container = new Element('div.chatBox').inject(parent);
    }

    ChatBox.prototype.build = function(user, toUser, chatTitle) {
      var loginText, title;
      this.userInfo = user;
      title = new Element('div.titleBox').inject(this.container);
      if (chatTitle) {
        chatTitle = '<span class="chatTitle">' + chatTitle + '</span>';
      } else {
        chatTitle = '';
      }
      if (toUser.login) {
        loginText = '<span>' + toUser.login + '</span> ';
      } else {
        loginText = '';
      }
      title.set('html', 'Chat with <b>' + loginText + '+' + toUser.phone + '</b>');
      this.chatMessagesBox = new ChatMessagesBox(this);
      this.answerBox = new Element('div.answerBox').inject(this.container);
      new Element('div.authUser', {
        html: user.login
      }).inject(this.answerBox);
      this.messageInputBox = new MessageInputBox(this);
      return this.sendMessageButton = new SendMessageButton(this);
    };

    return ChatBox;

  })();

  window.ChatBox = ChatBox;

}).call(this);

//# sourceMappingURL=ChatBox.js.map
