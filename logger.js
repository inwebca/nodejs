const Event = require("events");

var url = "http://mylogger.io/log";

class Logger extends Event {
  log(message) {
    this.emit("test", message);
  }
}

module.exports = Logger;
