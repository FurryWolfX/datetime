class Datetime {
  static format(date: Date, format: string): string {
    //format: "yyyy年MM月dd日hh小时mm分ss秒"
    let o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      S: date.getMilliseconds(), //millisecond
    };

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (let k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return format;
  }

  static getAge(start: Date, today: Date): number {
    if (!today || !start) return 0;
    let age = today.getFullYear() - start.getFullYear();
    //即便生日当天 也还不能计算为满一周岁 必须得次日
    if (
      today.getMonth() < start.getMonth() ||
      (today.getMonth() === start.getMonth() && today.getDate() <= start.getDate())
    ) {
      age--;
    }
    return age;
  }

  static formatSeconds(seconds: number): string {
    let theTime = Math.floor(seconds);
    let theTime1 = 0;
    let theTime2 = 0;
    let theTimeStr = theTime.toString();
    let theTime1Str = theTime1.toString();
    let theTime2Str = theTime2.toString();

    if (theTime >= 60) {
      theTime1 = Math.floor(theTime / 60);
      theTime = Math.floor(theTime % 60);
      if (theTime1 >= 60) {
        theTime2 = Math.floor(theTime1 / 60);
        theTime1 = Math.floor(theTime1 % 60);
      }
    }
    if (theTime < 10) {
      theTimeStr = "0" + Math.floor(theTime);
    }
    let result = theTimeStr + "";
    if (theTime1 >= 0) {
      if (theTime1 < 10) {
        theTime1Str = "0" + Math.floor(theTime1);
      }
      result = "" + theTime1Str + ":" + result;
    }
    if (theTime2 >= 0) {
      if (theTime2 < 10) {
        theTime2Str = "0" + Math.floor(theTime2);
      }
      result = "" + theTime2Str + ":" + result;
    }
    return result;
  }

  static formatTimeToSeconds(v_time: string): number {
    let t_arr = v_time.split(":");
    let hh = +t_arr[0];
    let mm = +t_arr[1];
    let ss = +t_arr[2];
    return Math.floor(hh * 3600) + Math.floor(mm * 60) + Math.floor(ss);
  }

  static dateDiff(timestamp: number, timestampEnd: number): string {
    // 补全为13位
    let arrTimestamp = (timestamp + "").split("");
    for (let start = 0; start < 13; start++) {
      if (!arrTimestamp[start]) {
        arrTimestamp[start] = "0";
      }
    }
    timestamp = parseInt(arrTimestamp.join(""));

    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let halfamonth = day * 15;
    let month = day * 30;
    let diffValue = timestampEnd - timestamp;

    // 如果本地时间反而小于变量时间
    if (diffValue < 0) {
      return "不久前";
    }

    // 计算差异时间的量级
    let monthC = diffValue / month;
    let weekC = diffValue / (7 * day);
    let dayC = diffValue / day;
    let hourC = diffValue / hour;
    let minC = diffValue / minute;

    // 数值补0方法
    let zero = function(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    };

    // 使用
    if (monthC > 12) {
      // 超过1年，直接显示年月日
      return (function() {
        let date = new Date(timestamp);
        return date.getFullYear() + "年" + zero(date.getMonth() + 1) + "月" + zero(date.getDate()) + "日";
      })();
    } else if (monthC >= 1) {
      return Math.floor(monthC) + "月前";
    } else if (weekC >= 1) {
      return Math.floor(weekC) + "周前";
    } else if (dayC >= 1) {
      return Math.floor(dayC) + "天前";
    } else if (hourC >= 1) {
      return Math.floor(hourC) + "小时前";
    } else if (minC >= 1) {
      return Math.floor(minC) + "分钟前";
    }
    return "刚刚";
  }

  static unitToTimestamp(value: number, unit: string): number {
    let _value = 0;
    switch (unit) {
      case "week":
        _value = value * 7 * 24 * 60 * 60 * 1000;
        break;
      case "day":
        _value = value * 24 * 60 * 60 * 1000;
        break;
      case "hour":
        _value = value * 60 * 60 * 1000;
        break;
      case "minute":
        _value = value * 60 * 1000;
        break;
      case "second":
        _value = value * 1000;
        break;
    }
    return _value;
  }

  static plus(startDate: Date, value: number, unit: string): Date {
    const start = startDate.getTime();
    const delta = Datetime.unitToTimestamp(value, unit);
    return new Date(start + delta);
  }

  static minus(startDate: Date, value: number, unit: string): Date {
    const start = startDate.getTime();
    const delta = Datetime.unitToTimestamp(value, unit);
    return new Date(start - delta);
  }

  static getMonthDay(year: number, month: number): number {
    const mDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) mDay[1] = 29;
    return mDay[month - 1];
  }
}

export default Datetime;
