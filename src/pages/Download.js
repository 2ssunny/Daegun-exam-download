import { Link } from "react-router-dom";
import React from "react";

import "./down.css";

function Home() {
  return (
    <div className="down">
      <h1 className="downtitle">Daegun High School exam Download</h1>
      <div className="downlink">
        <Link to="File2020" className="down-text">
          <span className="title-text2">2020학년도</span>
        </Link>
        <Link to="File2021" className="down-text">
          <span className="title-text2">2021학년도</span>
        </Link>
        <Link to="File2022" className="down-text">
          <span className="title-text2">2022학년도</span>
        </Link>
      </div>
      <div className="downexplain">
        <br></br>
        <br></br>
        <p>
          학년도를 클릭하면 해당학년도 기출문제 다운로드 페이지로 연결됩니다.
        </p>
      </div>
    </div>
  );
}

export default Home;
