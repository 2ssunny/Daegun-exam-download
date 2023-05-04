import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./about.css";

function App() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4, 20),
  };
  return (
    <div className="abouttitle">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <h1 className="abouttext">
        대건고등학교 기출문제를 과목별로 다운받을수 있는 사이트 입니다.
      </h1>
      <h3 className="abouttext">
        추후 평가원, 교육청 문제들 또한 추가할 예정이니 많은 관심 바랍니다
      </h3>
      <h3 className="abouttext">
        학교에서 제공되는 pdf 파일을 직접 과목별로 나누어 수정하니 오류가 있을
        수 있습니다. 문제사항이 발생하거나 불편사항이 발생할 경우 언제든 문의
        부탁드립니다.
      </h3>

      <div className="contact">
        <a href="https://www.instagram.com/ju_ho23/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://t.me/ssunny_lee" target="_blank">
          <i class="fa-brands fa-telegram"></i>
        </a>

        <a href="https://github.com/2ssunny" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://open.kakao.com/o/sWKeIEif" target="_blank">
          <i class="fa-solid fa-message"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
