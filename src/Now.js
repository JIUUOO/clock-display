import React, { useState, useEffect } from "react";
import "./index.css";

function Now() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000);
  }, []);

  function makeFormat(num, chr) {
    return num <= 9 ? chr + num.toString() : num.toString();
  }

  //   let today = new Date();
  let year = today.getFullYear().toString();
  let month = makeFormat(today.getMonth() + 1, " ");
  let date = makeFormat(today.getDate(), " ");

  const dayKr = (d) => {
    switch (d) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
      default:
        return " ";
    }
  };
  let day = dayKr(today.getDay());

  let hour = makeFormat(
    today.getHours() % 12 == 0 ? 12 : today.getHours() % 12,
    " "
  );
  let minute = makeFormat(today.getMinutes(), "0");
  let prefix = today.getHours() <= 11 ? "오전" : "오후";
  let second = makeFormat(today.getSeconds(), "0");

  let completeDate = year + "년 " + month + "월 " + date + "일 (" + day + ") ";
  let completeTime = prefix + " " + hour + ":" + minute + ":" + second;

  return (
    <div className="wrap-clock">
      <h1 className="clock">
        <span className="date">{completeDate}</span>
        <span className="time">{completeTime}</span>
      </h1>
    </div>
  );
}

export default Now;
