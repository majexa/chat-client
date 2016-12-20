// Generated by CoffeeScript 1.11.1
(function() {
  var ChatApiByPhone,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ChatApiByPhone = (function(superClass) {
    extend(ChatApiByPhone, superClass);

    function ChatApiByPhone(user, phone, config) {
      this.phone = phone;
      ChatApiByPhone.__super__.constructor.call(this, user, config);
    }

    ChatApiByPhone.prototype.start = function(onStart) {
      return this.login((function() {
        return this.getUserInfo(this.phone, (function(toUser) {
          return this.startChatWithUser(toUser, (function() {
            this.toUser = toUser;
            this.started = true;
            return onStart(toUser);
          }).bind(this));
        }).bind(this));
      }).bind(this));
    };

    return ChatApiByPhone;

  })(ChatApiJoined);

  window.ChatApiByPhone = ChatApiByPhone;

}).call(this);

//# sourceMappingURL=ChatApiByPhone.js.map
