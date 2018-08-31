// 현재 날짜(time) && 현재로부터 지난 시간(regdate)
function toStringTime(sec) {
  let total = Number(sec);
  let h = Math.floor(total / 3600);
  let m = Math.floor((total % 3600) / 60);
  let s = Math.floor((total % 3600) % 60);

  if (total > 3600) {
    return h + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  } else {
    return m + ":" + ("0" + s).slice(-2);
  }
}

function toStringRegdate(date) {
  let relatedDate =
    "about|just before|minutes ago|hours ago|days ago|moments ago|years ago";
  let text = relatedDate.split("|");

  let publishedDate = new Date(
    Date.parse(date.replace(/ *\(.*\)/, ""))
  ).getTime();
  let nowDate = new Date().getTime();

  let diff = nowDate - publishedDate;
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = day * 30;
  let year = month * 12;
  let result = "";

  if (parseInt(diff / second) < 59) {
    return text[1];
  } else if (parseInt(diff / minute) < 59) {
    result += parseInt(diff / minute) + text[2];
  } else if (parseInt(diff / hour) < 23) {
    result += parseInt(diff / hour) + text[3];
  } else if (parseInt(diff / day) < 32) {
    result += parseInt(diff / day) + text[4];
  } else if (parseInt(diff / month) < 12) {
    result += parseInt(diff / month) + text[5];
  } else {
    let remainder = diff % year;

    result += parseInt(diff / year) + text[6];
    if (parseInt(remainder / month) > 0)
      result += parseInt(remainder / month) + text[5];
  }

  return result;
}

let playerTime = toStringTime(5000);
let regdate = toStringRegdate("2017-09-28 06:21:24.775 +00:00");

console.log(playerTime);
console.log(regdate);
