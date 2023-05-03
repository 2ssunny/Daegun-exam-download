import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./year.css";
import firmidmun from "../media/2019/1stsem/midterm/1901중간문학.pdf";
import firmidmunans from "../media/2019/1stsem/midterm/1901중간문학답.pdf";
import firmath1 from "../media/2019/1stsem/midterm/1901중간수1.pdf";
import firmath1ans from "../media/2019/1stsem/midterm/1901중간수1답.pdf";
import firmath2 from "../media/2019/1stsem/midterm/1901중간수2.pdf";
import firmath2ans from "../media/2019/1stsem/midterm/1901중간수2답.pdf";

function Home() {
  return (
    <div className="downyear">
      <h1 className="downyeartitle">2020 Daegun highschool exam</h1>
      <div className="down2020">
        <div className="firstsem">
          <div className="semtitle">
            <h1 className="1stsem">First semester</h1>
          </div>
          <div className="common">
            <div className="liture">
              <a download href={firmidmun} className="button">
                <button>문학 시험지</button>
              </a>
              <a download href={firmidmunans} className="button">
                <button>문학 정답지</button>
              </a>
            </div>
            <div className="blank" />
            <div className="math1">
              <a download href={firmath1} className="button">
                <button>수학1 시험지</button>
              </a>
              <a download href={firmath1ans} className="button">
                <button>수학1 정답지</button>
              </a>
            </div>
            <div className="blank" />
            <div className="math2">
              <a download href={firmath2} className="button">
                <button>수학2 시험지</button>
              </a>
              <a download href={firmath2ans} className="button">
                <button>수학2 정답지</button>
              </a>
            </div>
          </div>
          <div className="social"></div>
          <div className="science"></div>
        </div>

        <div className="secondsem">
          <div className="common"></div>
          <div className="social"></div>
          <div className="science"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
