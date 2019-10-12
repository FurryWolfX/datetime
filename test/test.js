"use strict";

const datetime = require("../").default;

//测试系统时间为 东8区

console.log(datetime.format(new Date(), "yyyy-MM-dd hh")); //2018-12-07 15
console.log(datetime.format(new Date(), "yyyy-MM-dd hh:mm:ss")); //2018-12-07 15:48:39

console.log(datetime.getAge(new Date("1991-04-03"), new Date())); // 27
console.log(datetime.formatSeconds(70)); // 00:01:10
console.log(datetime.formatSeconds(0)); // 00:00:00
console.log(datetime.formatTimeToSeconds("00:01:10")); // 70
console.log(
  datetime.dateDiff(
    new Date("2015-09-08").getTime(),
    new Date("2015-09-10").getTime()
  )
); // 2天前
