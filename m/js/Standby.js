// Generated by CoffeeScript 1.12.0
(function() {
  var Standby;

  Standby = (function() {
    Standby.prototype.messages = [];

    Standby.prototype.config = {
      baseUrl: ''
    };

    function Standby(userInfo, config) {
      this.userInfo = userInfo;
      MicroEvent.mixin(this);
      Object.assign(this.config, config);
    }

    Standby.prototype.startSocket = function(token) {
      var socket;
      this.token = token;
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
      return socket.on('authenticated', (function() {}).bind(this)).on('event', (function(data) {
        console.log(data);
        return this.trigger(data.type, data);
      }).bind(this));
    };

    Standby.prototype.start = function() {
      return new Request({
        url: this.config.baseUrl + '/api/v1/login',
        onComplete: (function(data) {
          data = JSON.parse(data);
          if (data.error) {
            throw new Error(data.error);
          }
          console.log('start socket for ' + data._id);
          return this.startSocket(data.token);
        }).bind(this)
      }).get(this.userInfo);
    };

    Standby.prototype.sendMessage = function(message, onComplete) {
      return new Request({
        url: this.config.baseUrl + '/api/v1/message/userSend',
        onComplete: onComplete
      }).get({
        token: this.token,
        message: message
      });
    };

    return Standby;

  })();

  window.Standby = Standby;

}).call(this);

//# sourceMappingURL=Standby.js.map