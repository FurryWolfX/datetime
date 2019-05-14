var datetime = require("../dist/Datetime.umd");
var d = new Date();
var version = datetime.format(d, "yyyyMMddhhmm")
console.log(version);
