import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "10대 봄옷 추천",
    "20대 여름옷 추천",
    "30대 가을옷 추천",
  ]);
  let [좋아요, 좋아요변경] = useState(0);
  // let posts = "천호 고기 맛집";

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "20대 봄옷 추천";
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>{" "}
          {좋아요}
        </h3>
        <p>11월 10일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>11월 11일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>11월 12일 발행</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
