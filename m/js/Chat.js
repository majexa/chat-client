// Generated by CoffeeScript 1.12.0
(function() {
  var Chat;

  Chat = (function() {
    Chat.prototype.messages = [];

    Chat.prototype.config = {
      baseUrl: ''
    };

    function Chat(userInfo, toUserId, config) {
      this.userInfo = userInfo;
      this.toUserId = toUserId;
      MicroEvent.mixin(this);
      Object.assign(this.config, config);
    }

    Chat.prototype.restart = function() {
      this.socket.disconnect();
      return this.socket.connect();
    };

    Chat.prototype.startSocket = function(token, chatId) {
      var socket;
      this.token = token;
      this.chatId = chatId;
      if (this.config.baseUrl) {
        socket = io.connect(this.config.baseUrl);
      } else {
        socket = io.connect();
      }
      this.socket = socket;
      socket.on('connect', (function() {
        return socket.emit('authenticate', {
          token: token
        });
      }).bind(this));
      return socket.on('authenticated', (function() {
        this.chatId = chatId;
        return socket.emit('join', {
          chatId: chatId
        });
      }).bind(this)).on('event', (function(data) {
        console.log(data);
        this.trigger(data.type, data);
        if (data.type === 'joined') {
          return this.loadHistory();
        }
      }).bind(this)).on('unauthorized', function(msg) {
        return console.log('unauthorized: ' + JSON.stringify(msg.data));
      });
    };

    Chat.prototype.loadHistory = function() {
      return new Request({
        url: this.config.baseUrl + '/api/v1/message/list',
        onComplete: (function(messages) {
          messages = JSON.parse(messages);
          console.log(['history', messages]);
          return this.trigger('historyLoaded', messages);
        }).bind(this)
      }).get({
        token: this.token,
        chatId: this.chatId
      });
    };

    Chat.prototype.start = function(chatId) {
      return new Request({
        url: this.config.baseUrl + '/api/v1/login',
        onComplete: (function(data) {
          data = JSON.parse(data);
          if (data.error) {
            throw new Error(data.error);
          }
          if (chatId) {
            return this.startChatById(data, chatId);
          } else {
            return this.startChat(data);
          }
        }).bind(this)
      }).get(this.userInfo);
    };

    Chat.prototype.startChat = function(data) {
      return new Request({
        url: this.config.baseUrl + '/api/v1/chat/getOrCreateByTwoUsers',
        onComplete: (function(chat) {
          if (!chat) {
            return;
          }
          chat = JSON.parse(chat);
          if (chat.error) {
            throw new Error(chat.error);
          }
          this.data = chat;
          console.log('CHAT ' + chat.chatId);
          return this.startSocket(data.token, chat.chatId);
        }).bind(this)
      }).get({
        token: data.token,
        fromUserId: data._id,
        toUserId: this.toUserId
      });
    };

    Chat.prototype.startChatById = function(data, chatId) {
      return new Request({
        url: this.config.baseUrl + '/api/v1/chat/get',
        onComplete: (function(chat) {
          if (!chat) {
            return;
          }
          chat = JSON.parse(chat);
          if (chat.error) {
            throw new Error(chat.error);
          }
          this.data = chat;
          console.log('CHAT BY ID ' + chat.chatId);
          return this.startSocket(data.token, chat.chatId);
        }).bind(this)
      }).get({
        token: data.token,
        chatId: chatId
      });
    };

    Chat.prototype.sendMessage = function(message, onComplete) {
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

    Chat.prototype.sendUserMessage = function(message, onComplete) {
      if (!this.chatId) {
        throw new Error('Chat has not started');
      }
      return new Request({
        url: this.config.baseUrl + '/api/v1/message/userSend',
        onComplete: onComplete
      }).get({
        token: this.token,
        userId: this.toUserId,
        chatId: this.chatId,
        message: message
      });
    };

    return Chat;

  })();

  Chat.tts = function(timestamp) {
    var date, formattedTime, hours, minutes, monthNames;
    date = new Date(timestamp);
    hours = date.getHours();
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    minutes = "0" + date.getMinutes();
    formattedTime = date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + hours + ':' + minutes.substr(-2);
    return formattedTime;
  };

  window.Chat = Chat;

}).call(this);

//# sourceMappingURL=Chat.js.map
