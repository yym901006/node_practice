const { EventEmitter } = require("events");
module.exports = class Connection {
  // ##BEGIN## 代码已加密

  constructor() {
    // this.conns = [];

    this.emitter = new EventEmitter();
  }

  onConn(fun) {
    // this.conns.push(fun);
    this.emitter.on("connection", fun);
  }

  connection(...arg) {
    // this.conns.map((fun) => {
    //   fun(...);
    // });
    this.emitter.emit("connection", ...arg);
  }

  // ##END##
};
