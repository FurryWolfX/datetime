"use strict";

const datetime = require("../").default;

let result = datetime.minus(new Date("2019-04-29 11:20:00"), 1, "week");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-22 11:20:00
result = datetime.minus(new Date("2019-04-29 11:20:00"), 1, "day");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-28 11:20:00
result = datetime.minus(new Date("2019-04-29 11:20:00"), 1, "hour");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-29 10:20:00
result = datetime.minus(new Date("2019-04-29 11:20:00"), 1, "minute");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-29 11:19:00
result = datetime.minus(new Date("2019-04-29 11:20:00"), 1, "second");
console.log(datetime.format(result, "yyyy-MM-dd hh:mm:ss")); // 2019-04-29 11:19:59

