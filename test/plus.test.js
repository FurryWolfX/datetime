"use strict";

const datetime = require("../lib");

let result = datetime.plus(new Date("2019-04-29 11:20:00"), 1, "week");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-05-06 11:20:00
result = datetime.plus(new Date("2019-04-29 11:20:00"), 1, "day");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-30 11:20:00
result = datetime.plus(new Date("2019-04-29 11:20:00"), 1, "hour");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-29 12:20:00
result = datetime.plus(new Date("2019-04-29 11:20:00"), 1, "minute");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-29 11:21:00
result = datetime.plus(new Date("2019-04-29 11:20:00"), 1, "second");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-29 11:20:01

