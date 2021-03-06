// Generated by CoffeeScript 1.11.1
(function() {
  var ChatBoxConnect;

  ChatBoxConnect = (function() {
    function ChatBoxConnect(chatApi, chatBox, usersListBox) {
      this.chatApi = chatApi;
      this.chatBox = chatBox;
      this.usersListBox = usersListBox;
    }

    ChatBoxConnect.prototype.start = function(onStart) {
      return this.chatApi.start((function(toUser) {
        this.toUser = toUser;
        this.initUsers();
        this.chatBox.build(this.chatApi.user, toUser, this.chatApi.chatId);
        this.chatApi.loadHistory();
        this.bindHistoryEvent();
        this.bindNewMessageEvent();
        this.bindSendButton();
        this.bindMessageDeliveredStatusChange();
        this.bindMessageViewedStatusChange();
        if (onStart) {
          return onStart();
        }
      }).bind(this));
    };

    ChatBoxConnect.prototype.initUsers = function() {
      this.users = {};
      this.addUser(this.chatApi.user);
      return this.addUser(this.toUser);
    };

    ChatBoxConnect.prototype.addUser = function(user) {
      return this.users[user._id] = user;
    };

    ChatBoxConnect.prototype.bindNewUserMessagesEvent = function() {};

    ChatBoxConnect.prototype.bindNewMessageEvent = function() {
      return this.chatApi.bind('newMessage', (function(data) {
        return this.addMessage(data.message);
      }).bind(this));
    };

    ChatBoxConnect.prototype._addMessage = function(message) {
      return this.chatBox.chatMessagesBox._addMessage(this.users[message.userId], message);
    };

    ChatBoxConnect.prototype.messages = [];

    ChatBoxConnect.prototype.addMessage = function(message) {
      this.messages.push(message);
      this._addMessage(message);
      this.chatBox.chatMessagesBox.scrollBottom();
      return this.markAsViewedRemitted();
    };

    ChatBoxConnect.prototype.markAsViewedRemitted = function() {
      if (this.viewedTimeoutId) {
        clearTimeout(this.viewedTimeoutId);
      }
      return this.viewedTimeoutId = setTimeout((function() {
        this.chatApi.markAsViewed(this.messages);
        return this.messages = [];
      }).bind(this), 100);
    };

    ChatBoxConnect.prototype.bindHistoryEvent = function() {
      return this.chatApi.bind('historyLoaded', (function(messages) {
        var i, j, ref;
        for (i = j = ref = messages.length - 1; j >= 0; i = j += -1) {
          this.addMessage(messages[i]);
        }
        return setTimeout((function() {
          return this.chatBox.chatMessagesBox.scrollBottom();
        }).bind(this), 1000);
      }).bind(this));
    };

    ChatBoxConnect.prototype.bindSendButton = function() {
      this.chatBox.messageInputBox.input.addEvent('keypress', (function(e) {
        if (e.code === 10 && e.control) {
          return this.sendMessage();
        }
      }).bind(this));
      return this.chatBox.sendMessageButton.button.addEvent('click', (function() {
        return this.sendMessage();
      }).bind(this));
    };

    ChatBoxConnect.prototype.sendMessage = function() {
      var message;
      message = this.chatBox.messageInputBox.input.get('value');
      if (!message) {
        return;
      }
      this.chatBox.messageInputBox.disable();
      this.chatBox.sendMessageButton.disable();
      return this.chatApi.sendUserMessage(message, this.toUser._id, (function() {
        this.chatBox.messageInputBox.cleanup();
        this.chatBox.messageInputBox.enable();
        return this.chatBox.sendMessageButton.enable();
      }).bind(this));
    };

    ChatBoxConnect.prototype.bindMessageDeliveredStatusChange = function() {
      return this.chatApi.bind('delivered', (function(data) {
        var id, j, len, ref, results;
        ref = data.messageIds;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          id = ref[j];
          results.push(this.chatBox.chatMessagesBox.messageBoxes[id].markAsDelivered());
        }
        return results;
      }).bind(this));
    };

    ChatBoxConnect.prototype.bindMessageViewedStatusChange = function() {
      return this.chatApi.bind('viewed', (function(data) {
        var id, j, len, ref, results;
        ref = data.messageIds;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          id = ref[j];
          results.push(this.chatBox.chatMessagesBox.messageBoxes[id].markAsViewed());
        }
        return results;
      }).bind(this));
    };

    return ChatBoxConnect;

  })();

  window.ChatBoxConnect = ChatBoxConnect;

}).call(this);

//# sourceMappingURL=ChatBoxConnect.js.map
