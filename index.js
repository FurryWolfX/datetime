const main = {
  format(date, format) {
    //format: "yyyy年MM月dd日hh小时mm分ss秒"
    let o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      S: date.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }

    for (let k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return format;
  },
  getAge(start, today) {
    if (!today || !start) return 0;
    let age = today.getFullYear() - start.getFullYear();
    //即便生日当天 也还不能计算为满一周岁 必须得次日
    if (
      today.getMonth() < start.getMonth() ||
      (today.getMonth() === start.getMonth() &&
        today.getDate() <= start.getDate())
    ) {
      age--;
    }
    return age;
  },
  formatSeconds(seconds) {
    let theTime = parseInt(seconds);
    let theTime1 = 0;
    let theTime2 = 0;

    if (theTime >= 60) {
      theTime1 = parseInt(theTime / 60);
      theTime = parseInt(theTime % 60);
      if (theTime1 >= 60) {
        theTime2 = parseInt(theTime1 / 60);
        theTime1 = parseInt(theTime1 % 60);
      }
    }
    if (theTime < 10) {
      theTime = "0" + parseInt(theTime);
    }
    let result = "" + theTime + "";
    if (theTime1 >= 0) {
      if (theTime1 < 10) {
        theTime1 = "0" + parseInt(theTime1);
      }
      result = "" + theTime1 + ":" + result;
    }
    if (theTime2 >= 0) {
      if (theTime2 < 10) {
        theTime2 = "0" + parseInt(theTime2);
      }
      result = "" + theTime2 + ":" + result;
    }
    return result;
  },
  formatTimeToSeconds(v_time) {
    let t_arr = v_time.split(":");
    let hh = t_arr[0];
    let mm = t_arr[1];
    let ss = t_arr[2];
    let s_now = parseInt(hh * 3600) + parseInt(mm * 60) + parseInt(ss);
    return s_now;
  },
  dateDiff(timestamp, timestampEnd) {
    // 补全为13位
    let arrTimestamp = (timestamp + "").split("");
    for (let start = 0; start < 13; start++) {
      if (!arrTimestamp[start]) {
        arrTimestamp[start] = "0";
      }
    }
    timestamp = arrTimestamp.join("") * 1;

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
        return (
          date.getFullYear() +
          "年" +
          zero(date.getMonth() + 1) +
          "月" +
          zero(date.getDate()) +
          "日"
        );
      })();
    } else if (monthC >= 1) {
      return parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
      return parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
      return parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
      return parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
      return parseInt(minC) + "分钟前";
    }
    return "刚刚";
  }
};

module.exports = main;
