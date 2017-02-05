// Generated by CoffeeScript 1.11.1
(function() {
  var ChatApi,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ChatApi = (function(superClass) {
    extend(ChatApi, superClass);

    function ChatApi(token, config) {
      this.token = token;
      this.config = config;
      MicroEvent.mixin(this);
      this.initDeliveredLogic();
    }

    ChatApi.prototype.request = function(path, request, onComplete) {
      request.token = this.token;
      return ChatApi.__super__.request.call(this, path, request, onComplete);
    };

    ChatApi.prototype.restart = function() {
      this.socket.disconnect();
      return this.socket.connect();
    };

    ChatApi.prototype.login = function(onComplete) {
      throw new Error('login is not supported');
    };

    ChatApi.prototype.start = function() {
      throw new Error('abstract');
    };

    ChatApi.prototype.initDeliveredLogic = function(chatId) {
      return this.bind('newUserMessages', (function(data) {
        return this.markAsDelivered(data.messages);
      }).bind(this));
    };

    ChatApi.prototype.loadHistory = function() {
      return new Request({
        url: this.config.baseUrl + '/api/v1/message/list',
        onComplete: (function(messages) {
          messages = JSON.parse(messages);
          if (messages.length === 0) {
            return;
          }
          this.markAsDelivered(messages);
          return this.trigger('historyLoaded', messages);
        }).bind(this)
      }).get({
        token: this.token,
        chatId: this.chatId
      });
    };

    ChatApi.prototype.sendMessage = function(message, onComplete) {
      if (!this.chatId) {
        throw new Error('Chat has not started');
      }
      return new Request({
        url: this.config.baseUrl + '/api/v1/message/send',
        onComplete: onComplete
      }).get({
        token: this.token,
        chatId: this.chatId,
        message: message
      });
    };

    ChatApi.prototype.sendUserMessage = function(message, userId, onComplete) {
      if (!this.chatId) {
        throw new Error('Chat has not started');
      }
      return new Request({
        url: this.config.baseUrl + '/api/v1/message/userSend',
        onComplete: onComplete
      }).get({
        token: this.token,
        userId: userId,
        chatId: this.chatId,
        message: message
      });
    };

    ChatApi.prototype.loadUserInfo = function(phoneOrId, onComplete) {
      if (phoneOrId.length === 11) {
        return new Request({
          url: this.config.baseUrl + '/api/v1/user/info',
          onComplete: (function(userInfo) {
            userInfo = JSON.parse(userInfo);
            return onComplete(userInfo);
          })
        }).get({
          phone: phoneOrId
        });
      } else {
        return new Request({
          url: this.config.baseUrl + '/api/v1/user/info',
          onComplete: (function(userInfo) {
            userInfo = JSON.parse(userInfo);
            return onComplete(userInfo);
          })
        }).get({
          id: phoneOrId
        });
      }
    };

    ChatApi.prototype.markAsDelivered = function(messages) {
      return this.markAs('delivered', messages);
    };

    ChatApi.prototype.markAsViewed = function(messages) {
      return this.markAs('viewed', messages);
    };

    ChatApi.prototype.ucFirst = function(str) {
      var f;
      f = str.charAt(0).toUpperCase();
      return f + str.substr(1, str.length - 1);
    };

    ChatApi.prototype.markAs = function(keyword, messages) {
      var arrangedMessages, chatId, eventType, i, len, message, messageIds, results;
      messages = messages.filter((function(message) {
        return message.userId !== this.user._id;
      }).bind(this));
      messages = messages.filter(function(message) {
        return !message[keyword];
      });
      if (messages.length === 0) {
        return;
      }
      arrangedMessages = {};
      for (i = 0, len = messages.length; i < len; i++) {
        message = messages[i];
        if (!message.chatId) {
          throw new Error('message.chatId is required');
        }
        if (!arrangedMessages[message.chatId]) {
          arrangedMessages[message.chatId] = [];
        }
        arrangedMessages[message.chatId].push(message);
      }
      eventType = 'markAs' + this.ucFirst(keyword);
      console.log(eventType);
      results = [];
      for (chatId in arrangedMessages) {
        messages = arrangedMessages[chatId];
        messageIds = messages.map(function(message) {
          return message._id;
        });
        results.push(this.socket.emit(eventType, {
          messageIds: messageIds.join(','),
          chatId: chatId
        }));
      }
      return results;
    };

    return ChatApi;

  })(ChatApiBasic);

  ChatApi.tts = function(timestamp) {
    var date, formattedTime, hours, minutes, monthNames;
    date = new Date(timestamp);
    hours = date.getHours();
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    minutes = "0" + date.getMinutes();
    formattedTime = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + hours + ':' + minutes.substr(-2);
    return formattedTime;
  };

  window.ChatApi = ChatApi;

}).call(this);

//# sourceMappingURL=ChatApi.js.map
