import React from "react";

function App() {
  return (
    <div>
      <DateOfToday />
    </div>
  );
}

function DateOfToday() {
  function makeFormat(num) {
    return num <= 9 ? " " + num.toString() : num.toString();
  }

  let today = new Date();
  let year = today.getFullYear().toString();
  let month = makeFormat(today.getMonth() + 1);
  let date = makeFormat(today.getDate());

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
    }
  };
  let day = dayKr(today.getDay());

  let hour = makeFormat(today.getHours());
  let minute = makeFormat(today.getMinutes());
  let second = makeFormat(today.getSeconds());

  return (
    <div>
      <h1>
        {year +
          "년 " +
          month +
          "월 " +
          date +
          "일 (" +
          day +
          ") " +
          hour +
          ":" +
          minute +
          ":" +
          second}
      </h1>
    </div>
  );
}

export default App;
