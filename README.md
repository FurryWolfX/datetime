超轻量时间工具库。

```bash
npm install @wolfx/datetime --save
```

```javascript
const datetime = require("@wolfx/datetime");
```

# 格式化

```javascript
console.log(datetime.format(new Date(), "yyyy-MM-dd hh")); //2018-12-07 15
console.log(datetime.format(new Date(), "yyyy-MM-dd hh:mm:ss")); //2018-12-07 15:48:39
```

# 计算年龄

```javascript
console.log(datetime.getAge(new Date("1991-04-03"), new Date())); // 27
```

# 时间段的格式化

```javascript
console.log(datetime.formatSeconds(70)); // 00:01:10
console.log(datetime.formatTimeToSeconds("00:01:10")); // 70
```

# 时间差

```javascript
console.log(datetime.dateDiff(new Date("2015-09-08").getTime(), new Date("2015-09-10").getTime())); // 2天前
```

# 加法

```javascript
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
```

# 减法

```javascript
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
```

# 计算指定月份的天数

```javascript
console.log(datetime.getMonthDay(2019, 1)); // 31
```
