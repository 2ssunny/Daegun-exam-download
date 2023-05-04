import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./home.css";
import githubimg from "../media/github.png";

function Home() {
  return (
    <div>
      <div className="homehead">
        <h1 className="home_title">대건고등학교 기출문제 다운로드 사이트</h1>

        <div className="homeexplain">
          <p>대건고등학교 학생들의 편의를 위한 사이트입니다.</p>
          <p>학생들의 편의를 위한것이며 영리적 목적으로 사용되지 않습니다.</p>
        </div>
      </div>
      <div className="homefooter">
        <p className="homename">
          Made by <span>Lee Juho</span> of 2-7
        </p>
        <p className="homecontact">
          <a href="https://github.com/2ssunny" target="_blank">
            <img src={githubimg} className="homegithub" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
