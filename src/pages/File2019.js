import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./year.css";
// import firstmidmunhak from "../media/2019/2019학년도 1학기 중간고사 2학년 문학 원안지.pdf";
import firstmidmunhakans from "../media/2019/1stsem/midterm/2019학년도 1학기 중간고사 2학년 문학 정답.pdf";

function Home() {
  return (
    <div className="downyear">
      hi
      <h1 className="downyeartitle">2019 Daegun highschool exam</h1>
      <div className="down2019">
        {/* <a download href={firstmidmunhak}>
          <button type="submit">문학 시험지</button>
        </a> */}
        <a download href={firstmidmunhakans} className="button">
          <button type="submit">문학 정답지</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
