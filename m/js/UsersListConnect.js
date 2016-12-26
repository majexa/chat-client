// Generated by CoffeeScript 1.11.1
(function() {
  var UsersListConnect;

  UsersListConnect = (function() {
    function UsersListConnect(chatApi, usersListBox) {
      this.chatApi = chatApi;
      this.usersListBox = usersListBox;
    }

    UsersListConnect.prototype.start = function() {
      return this.chatApi.start((function(toUser) {
        return this.onStart();
      }).bind(this));
    };

    UsersListConnect.prototype.onStart = function() {
      this.loadContactsFromMessages();
      return this.waitForNewUserMessages();
    };

    UsersListConnect.prototype.loadContactsFromMessages = function() {
      return this.chatApi.request('contacts/getFromMessages', {
        token: this.chatApi.token
      }, (function(userIds) {
        var i, len, results, userId;
        results = [];
        for (i = 0, len = userIds.length; i < len; i++) {
          userId = userIds[i];
          results.push(this.addToNewUsersList(userId, 0));
        }
        return results;
      }).bind(this));
    };

    UsersListConnect.prototype.waitForNewUserMessages = function() {
      return this.chatApi.bind('newUserMessages', (function(data) {
        var counts, i, len, message, ref, results, userId;
        counts = {};
        ref = data.messages;
        for (i = 0, len = ref.length; i < len; i++) {
          message = ref[i];
          if (!counts[message.userId]) {
            counts[message.userId] = 0;
          }
          counts[message.userId]++;
        }
        results = [];
        for (userId in counts) {
          results.push(this.addToNewUsersList(userId, counts[userId]));
        }
        return results;
      }).bind(this));
    };

    UsersListConnect.prototype.addToNewUsersList = function(userId, messagesCount) {
      return this.chatApi.loadUserInfo(userId, (function(user) {
        if (this.chatApi.toUser && this.chatApi.toUser._id === user._id) {
          user.selected = true;
        }
        return this.usersListBox.addUser(user, messagesCount);
      }).bind(this));
    };

    return UsersListConnect;

  })();

  window.UsersListConnect = UsersListConnect;

}).call(this);

//# sourceMappingURL=UsersListConnect.js.map
