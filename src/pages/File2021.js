import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./year.css";

import firmidmun from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-1.pdf";
import firmidmath1 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-2.pdf";
import firmidmath2 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-3.pdf";
import firmideng1 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-4.pdf";
import firmidkgeo from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-5.pdf";
import firmidwhis from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-6.pdf";
import firmidlaw from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-7.pdf";
import firmidphy1 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-8.pdf";
import firmidche1 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-9.pdf";
import firmidbio1 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-10.pdf";
import firmidearth1 from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-11.pdf";
import firmidjap from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-12.pdf";
import firmidchi from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-13.pdf";
import firmidpr from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 문제 모음-part-14.pdf";

import firmidmunans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/01-02.pdf";
import firmidmath1ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/03-04.pdf";
import firmidmath2ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/05-06.pdf";
import firmideng1ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/07-08.pdf";
import firmidkgeoans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/09-10.pdf";
import firmidwhisans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/11-12.pdf";
import firmidlawans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/13-14.pdf";
import firmidphy1ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/15-16.pdf";
import firmidche1ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/17-18.pdf";
import firmidbio1ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/19-20.pdf";
import firmidearth1ans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/21-22.pdf";
import firmidjapans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/23-23.pdf";
import firmidchians from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/24-24.pdf";
import firmidprans from "../media/2021/1stsem/midterm/2021학년도 1학기 중간고사 2학년 정답 모음/25-25.pdf";

import firfinmun from "../media/2021/1stsem/final/2021_1_fin_test/01-10.pdf";
import firfinmath1 from "../media/2021/1stsem/final/2021_1_fin_test/11-15.pdf";
import firfinmath2 from "../media/2021/1stsem/final/2021_1_fin_test/16-19.pdf";
import firfineng1 from "../media/2021/1stsem/final/2021_1_fin_test/20-27.pdf";
import firfinkgeo from "../media/2021/1stsem/final/2021_1_fin_test/28-33.pdf";
import firfinwhis from "../media/2021/1stsem/final/2021_1_fin_test/34-39.pdf";
import firfinlaw from "../media/2021/1stsem/final/2021_1_fin_test/40-43.pdf";
import firfinphy1 from "../media/2021/1stsem/final/2021_1_fin_test/44-49.pdf";
import firfinche1 from "../media/2021/1stsem/final/2021_1_fin_test/50-53.pdf";
import firfinbio1 from "../media/2021/1stsem/final/2021_1_fin_test/54-59.pdf";
import firfinearth1 from "../media/2021/1stsem/final/2021_1_fin_test/60-65.pdf";
import firfinjap from "../media/2021/1stsem/final/2021_1_fin_test/66-68.pdf";
import firfinchi from "../media/2021/1stsem/final/2021_1_fin_test/69-71.pdf";
import firfinpr from "../media/2021/1stsem/final/2021_1_fin_test/72-75.pdf";

import firfinmunans from "../media/2021/1stsem/final/2021_1_fin_ans/01-02.pdf";
import firfinmath1ans from "../media/2021/1stsem/final/2021_1_fin_ans/03-04.pdf";
import firfinmath2ans from "../media/2021/1stsem/final/2021_1_fin_ans/05-06.pdf";
import firfineng1ans from "../media/2021/1stsem/final/2021_1_fin_ans/07-08.pdf";
import firfinkgeoans from "../media/2021/1stsem/final/2021_1_fin_ans/09-10.pdf";
import firfinwhisans from "../media/2021/1stsem/final/2021_1_fin_ans/11-12.pdf";
import firfinlawans from "../media/2021/1stsem/final/2021_1_fin_ans/13-14.pdf";
import firfinphy1ans from "../media/2021/1stsem/final/2021_1_fin_ans/15-16.pdf";
import firfinche1ans from "../media/2021/1stsem/final/2021_1_fin_ans/17-18.pdf";
import firfinbio1ans from "../media/2021/1stsem/final/2021_1_fin_ans/19-20.pdf";
import firfinearth1ans from "../media/2021/1stsem/final/2021_1_fin_ans/21-22.pdf";
import firfinjapans from "../media/2021/1stsem/final/2021_1_fin_ans/23-23.pdf";
import firfinchians from "../media/2021/1stsem/final/2021_1_fin_ans/24-24.pdf";
import firfinprans from "../media/2021/1stsem/final/2021_1_fin_ans/25-25.pdf";

import secmiddok from "../media/2021/2ndsem/midterm/2021_2_mid_test/01-11.pdf";
import secmidmath2 from "../media/2021/2ndsem/midterm/2021_2_mid_test/12-14.pdf";
import secmidmijeok from "../media/2021/2ndsem/midterm/2021_2_mid_test/15-20.pdf";
import secmidhwak from "../media/2021/2ndsem/midterm/2021_2_mid_test/21-24.pdf";
import secmidgiha from "../media/2021/2ndsem/midterm/2021_2_mid_test/25-28.pdf";
import secmideng2 from "../media/2021/2ndsem/midterm/2021_2_mid_test/29-33.pdf";
import secmidyunsa from "../media/2021/2ndsem/midterm/2021_2_mid_test/34-42.pdf";
import secmidphy1 from "../media/2021/2ndsem/midterm/2021_2_mid_test/43-48.pdf";
import secmidche1 from "../media/2021/2ndsem/midterm/2021_2_mid_test/49-52.pdf";
import secmidbio1 from "../media/2021/2ndsem/midterm/2021_2_mid_test/53-58.pdf";
import secmidearth1 from "../media/2021/2ndsem/midterm/2021_2_mid_test/59-64.pdf";
import secmidphy2 from "../media/2021/2ndsem/midterm/2021_2_mid_test/65-70.pdf";
import secmidche2 from "../media/2021/2ndsem/midterm/2021_2_mid_test/71-76.pdf";
import secmidbio2 from "../media/2021/2ndsem/midterm/2021_2_mid_test/77-81.pdf";
import secmidjap from "../media/2021/2ndsem/midterm/2021_2_mid_test/82-84.pdf";
import secmidchi from "../media/2021/2ndsem/midterm/2021_2_mid_test/85-87.pdf";
import secmidpr from "../media/2021/2ndsem/midterm/2021_2_mid_test/88-91.pdf";

import secmiddokans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/01-02.pdf";
import secmidmath2ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/03-04.pdf";
import secmidmijeokans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/05-06.pdf";
import secmidhwakans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/07-08.pdf";
import secmidgihaans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/09-10.pdf";
import secmideng2ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/11-12.pdf";
import secmidyunsaans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/13-14.pdf";
import secmidphy1ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/15-16.pdf";
import secmidche1ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/17-18.pdf";
import secmidbio1ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/19-20.pdf";
import secmidearth1ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/21-22.pdf";
import secmidphy2ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/23-24.pdf";
import secmidche2ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/25-26.pdf";
import secmidbio2ans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/27-28.pdf";
import secmidjapans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/29-29.pdf";
import secmidchians from "../media/2021/2ndsem/midterm/2021_2_mid_ans/30-30.pdf";
import secmidprans from "../media/2021/2ndsem/midterm/2021_2_mid_ans/31-31.pdf";

import secfindok from "../media/2021/2ndsem/final/2021_2_fin_test/01-10.pdf";
import secfinmath2 from "../media/2021/2ndsem/final/2021_2_fin_test/11-13.pdf";
import secfinmijeok from "../media/2021/2ndsem/final/2021_2_fin_test/14-19.pdf";
import secfinhwak from "../media/2021/2ndsem/final/2021_2_fin_test/20-23.pdf";
import secfingiha from "../media/2021/2ndsem/final/2021_2_fin_test/24-27.pdf";
import secfineng2 from "../media/2021/2ndsem/final/2021_2_fin_test/28-35.pdf";
import secfinyunsa from "../media/2021/2ndsem/final/2021_2_fin_test/36-41.pdf";
import secfinphy1 from "../media/2021/2ndsem/final/2021_2_fin_test/42-47.pdf";
import secfinche1 from "../media/2021/2ndsem/final/2021_2_fin_test/48-53.pdf";
import secfinbio1 from "../media/2021/2ndsem/final/2021_2_fin_test/54-59.pdf";
import secfinearth1 from "../media/2021/2ndsem/final/2021_2_fin_test/60-66.pdf";
import secfinphy2 from "../media/2021/2ndsem/final/2021_2_fin_test/67-71.pdf";
import secfinche2 from "../media/2021/2ndsem/final/2021_2_fin_test/72-76.pdf";
import secfinbio2 from "../media/2021/2ndsem/final/2021_2_fin_test/77-82.pdf";
import secfinjapchi from "../media/2021/2ndsem/final/2021_2_fin_test/83-88.pdf";
import secfinpr from "../media/2021/2ndsem/final/2021_2_fin_test/89-91.pdf";

import secfindokans from "../media/2021/2ndsem/final/2021_2_fin_ans/01-02.pdf";
import secfinmath2ans from "../media/2021/2ndsem/final/2021_2_fin_ans/03-04.pdf";
import secfinmijeokans from "../media/2021/2ndsem/final/2021_2_fin_ans/05-06.pdf";
import secfinhwakans from "../media/2021/2ndsem/final/2021_2_fin_ans/07-08.pdf";
import secfingihaans from "../media/2021/2ndsem/final/2021_2_fin_ans/09-10.pdf";
import secfineng2ans from "../media/2021/2ndsem/final/2021_2_fin_ans/11-12.pdf";
import secfinyunsaans from "../media/2021/2ndsem/final/2021_2_fin_ans/13-14.pdf";
import secfinphy1ans from "../media/2021/2ndsem/final/2021_2_fin_ans/15-16.pdf";
import secfinche1ans from "../media/2021/2ndsem/final/2021_2_fin_ans/17-18.pdf";
import secfinbio1ans from "../media/2021/2ndsem/final/2021_2_fin_ans/19-20.pdf";
import secfinearth1ans from "../media/2021/2ndsem/final/2021_2_fin_ans/21-22.pdf";
import secfinphy2ans from "../media/2021/2ndsem/final/2021_2_fin_ans/23-24.pdf";
import secfinche2ans from "../media/2021/2ndsem/final/2021_2_fin_ans/25-26.pdf";
import secfinbio2ans from "../media/2021/2ndsem/final/2021_2_fin_ans/27-28.pdf";
import secfinjapans from "../media/2021/2ndsem/final/2021_2_fin_ans/29-29.pdf";
import secfinchians from "../media/2021/2ndsem/final/2021_2_fin_ans/30-30.pdf";
import secfinprans from "../media/2021/2ndsem/final/2021_2_fin_ans/31-31.pdf";

function Home() {
  return (
    <div className="downyear">
      <h1 className="downyeartitle">2021 Daegun highschool exam</h1>
      <div className="down2021">
        <div className="firstsem">
          <h1 className="downtestinfo">1학기 중간고사</h1>
          <div className="midterm">
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
                <a download href={firmidmath1} className="button">
                  <button>수학1 시험지</button>
                </a>
                <a download href={firmidmath1ans} className="button">
                  <button>수학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="math2">
                <a download href={firmidmath2} className="button">
                  <button>수학2 시험지</button>
                </a>
                <a download href={firmidmath2ans} className="button">
                  <button>수학2 정답지</button>
                </a>
              </div>
              <div className="english1">
                <a download href={firmideng1} className="button">
                  <button>영어1 시험지</button>
                </a>
                <a download href={firmideng1ans} className="button">
                  <button>영어1 정답지</button>
                </a>
              </div>
            </div>

            <div className="social">
              <div className="geology">
                <a download href={firmidkgeo} className="button">
                  <button>지리 시험지</button>
                </a>
                <a download href={firmidkgeoans} className="button">
                  <button>지리 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="whis">
                <a download href={firmidwhis} className="button">
                  <button>세계사 시험지</button>
                </a>
                <a download href={firmidwhisans} className="button">
                  <button>세계사 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="law">
                <a download href={firmidlaw} className="button">
                  <button>정치와 법 시험지</button>
                </a>
                <a download href={firmidlawans} className="button">
                  <button>정치와 법 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="science">
              <div className="physics1">
                <a download href={firmidphy1} className="button">
                  <button>물리학1 시험지</button>
                </a>
                <a download href={firmidphy1ans} className="button">
                  <button>물리학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chem1">
                <a download href={firmidche1} className="button">
                  <button>화학1 시험지</button>
                </a>
                <a download href={firmidche1ans} className="button">
                  <button>화학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="bio1">
                <a download href={firmidbio1} className="button">
                  <button>생명과학1 시험지</button>
                </a>
                <a download href={firmidbio1ans} className="button">
                  <button>생명과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="earth1">
                <a download href={firmidearth1} className="button">
                  <button>지구과학1 시험지</button>
                </a>
                <a download href={firmidearth1ans} className="button">
                  <button>지구과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="etc">
              <div className="jap">
                <a download href={firmidjap} className="button">
                  <button>일본어 시험지</button>
                </a>
                <a download href={firmidjapans} className="button">
                  <button>일본어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chi">
                <a download href={firmidchi} className="button">
                  <button>중국어 시험지</button>
                </a>
                <a download href={firmidchians} className="button">
                  <button>중국어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="prgm">
                <a download href={firmidpr} className="button">
                  <button>ㅍ로그래밍 시험지</button>
                </a>
                <a download href={firmidprans} className="button">
                  <button>프로그래밍 정답지</button>
                </a>
              </div>
            </div>
          </div>

          <h1 className="downtestinfo">1학기 기말고사</h1>
          <div className="final">
            <div className="common">
              <div className="liture">
                <a download href={firfinmun} className="button">
                  <button>문학 시험지</button>
                </a>
                <a download href={firfinmunans} className="button">
                  <button>문학 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="math1">
                <a download href={firfinmath1} className="button">
                  <button>수학1 시험지</button>
                </a>
                <a download href={firfinmath1ans} className="button">
                  <button>수학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="math2">
                <a download href={firfinmath2} className="button">
                  <button>수학2 시험지</button>
                </a>
                <a download href={firfinmath2ans} className="button">
                  <button>수학2 정답지</button>
                </a>
              </div>
              <div className="english1">
                <a download href={firfineng1} className="button">
                  <button>영어1 시험지</button>
                </a>
                <a download href={firfineng1ans} className="button">
                  <button>영어1 정답지</button>
                </a>
              </div>
            </div>

            <div className="social">
              <div className="geology">
                <a download href={firfinkgeo} className="button">
                  <button>지리 시험지</button>
                </a>
                <a download href={firfinkgeoans} className="button">
                  <button>지리 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="whis">
                <a download href={firfinwhis} className="button">
                  <button>세계사 시험지</button>
                </a>
                <a download href={firfinwhisans} className="button">
                  <button>세계사 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="law">
                <a download href={firfinlaw} className="button">
                  <button>정치와 법 시험지</button>
                </a>
                <a download href={firfinlawans} className="button">
                  <button>정치와 법 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="science">
              <div className="physics1">
                <a download href={firfinphy1} className="button">
                  <button>물리학1 시험지</button>
                </a>
                <a download href={firfinphy1ans} className="button">
                  <button>물리학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chem1">
                <a download href={firfinche1} className="button">
                  <button>화학1 시험지</button>
                </a>
                <a download href={firfinche1ans} className="button">
                  <button>화학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="bio1">
                <a download href={firfinbio1} className="button">
                  <button>생명과학1 시험지</button>
                </a>
                <a download href={firfinbio1ans} className="button">
                  <button>생명과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="earth1">
                <a download href={firfinearth1} className="button">
                  <button>지구과학1 시험지</button>
                </a>
                <a download href={firfinearth1ans} className="button">
                  <button>지구과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="etc">
              <div className="jap">
                <a download href={firfinjap} className="button">
                  <button>일본어 시험지</button>
                </a>
                <a download href={firfinjapans} className="button">
                  <button>일본어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chi">
                <a download href={firfinchi} className="button">
                  <button>중국어 시험지</button>
                </a>
                <a download href={firfinchians} className="button">
                  <button>중국어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="prgm">
                <a download href={firfinpr} className="button">
                  <button>ㅍ로그래밍 시험지</button>
                </a>
                <a download href={firfinprans} className="button">
                  <button>프로그래밍 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
          </div>
        </div>

        <div className="secondsem">
          <h1 className="downtestinfo">2학기 중간고사</h1>
          <div className="midterm">
            <div className="common">
              <div className="reading">
                <a download href={secmiddok} className="button">
                  <button>독서 시험지</button>
                </a>
                <a download href={secmiddokans} className="button">
                  <button>독서 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="math2">
                <a download href={secmidmath2} className="button">
                  <button>수학2 시험지</button>
                </a>
                <a download href={secmidmath2ans} className="button">
                  <button>수학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="english2">
                <a download href={secmideng2} className="button">
                  <button>영어2 시험지</button>
                </a>
                <a download href={secmideng2ans} className="button">
                  <button>영어2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="mijeok">
                <a download href={secmidmijeok} className="button">
                  <button>미적분 시험지</button>
                </a>
                <a download href={secmidmijeokans} className="button">
                  <button>미적분 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="hwaktong">
                <a download href={secmidhwak} className="button">
                  <button>확률과 통계 시험지</button>
                </a>
                <a download href={secmidhwakans} className="button">
                  <button>확률과 통계 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="giha">
                <a download href={secmidgiha} className="button">
                  <button>기하 시험지</button>
                </a>
                <a download href={secmidgihaans} className="button">
                  <button>기하 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>

            <div className="social">
              <div className="yunsa">
                <a download href={secmidyunsa} className="button">
                  <button>윤리와 사상 시험지</button>
                </a>
                <a download href={secmidyunsaans} className="button">
                  <button>윤리와 사상 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="science">
              <div className="physics1">
                <a download href={secmidphy1} className="button">
                  <button>물리학1 시험지</button>
                </a>
                <a download href={secmidphy1ans} className="button">
                  <button>물리학1 정답지</button>
                </a>
              </div>
              <div className="blank" />

              <div className="chem1">
                <a download href={secmidche1} className="button">
                  <button>화학1 시험지</button>
                </a>
                <a download href={secmidche1ans} className="button">
                  <button>화학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="bio1">
                <a download href={secmidbio1} className="button">
                  <button>생명과학1 시험지</button>
                </a>
                <a download href={secmidbio1ans} className="button">
                  <button>생명과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="earth1">
                <a download href={secmidearth1} className="button">
                  <button>지구과학1 시험지</button>
                </a>
                <a download href={secmidearth1ans} className="button">
                  <button>지구과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="physics2">
                <a download href={secmidphy2} className="button">
                  <button>물리학2 시험지</button>
                </a>
                <a download href={secmidphy2ans} className="button">
                  <button>물리학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chem2">
                <a download href={secmidche2} className="button">
                  <button>화학2 시험지</button>
                </a>
                <a download href={secmidche2ans} className="button">
                  <button>화학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="bio2">
                <a download href={secmidbio2} className="button">
                  <button>생명과학2 시험지</button>
                </a>
                <a download href={secmidbio2ans} className="button">
                  <button>생명과학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="etc">
              <div className="jap">
                <a download href={secmidjap} className="button">
                  <button>일본어 시험지</button>
                </a>
                <a download href={secmidjapans} className="button">
                  <button>일본어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chi">
                <a download href={secmidchi} className="button">
                  <button>중국어 시험지</button>
                </a>
                <a download href={secmidchians} className="button">
                  <button>중국어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="prgm">
                <a download href={secmidpr} className="button">
                  <button>프로그래밍 시험지</button>
                </a>
                <a download href={secmidprans} className="button">
                  <button>프로그래밍 정답지</button>
                </a>
              </div>
            </div>
          </div>

          <h1 className="downtestinfo">2학기 기말고사</h1>
          <div className="final">
            <div className="common">
              <div className="reading">
                <a download href={secfindok} className="button">
                  <button>독서 시험지</button>
                </a>
                <a download href={secfindokans} className="button">
                  <button>독서 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="math2">
                <a download href={secfinmath2} className="button">
                  <button>수학2 시험지</button>
                </a>
                <a download href={secfinmath2ans} className="button">
                  <button>수학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="english2">
                <a download href={secfineng2} className="button">
                  <button>영어2 시험지</button>
                </a>
                <a download href={secfineng2ans} className="button">
                  <button>영어2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="mijeok">
                <a download href={secfinmijeok} className="button">
                  <button>미적분 시험지</button>
                </a>
                <a download href={secfinmijeokans} className="button">
                  <button>미적분 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="hwaktong">
                <a download href={secfinhwak} className="button">
                  <button>확률과 통계 시험지</button>
                </a>
                <a download href={secfinhwakans} className="button">
                  <button>확률과 통계 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="giha">
                <a download href={secfingiha} className="button">
                  <button>기하 시험지</button>
                </a>
                <a download href={secfingihaans} className="button">
                  <button>기하 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>

            <div className="social">
              <div className="yunsa">
                <a download href={secfinyunsa} className="button">
                  <button>윤리와 사상 시험지</button>
                </a>
                <a download href={secfinyunsaans} className="button">
                  <button>윤리와 사상 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="science">
              <div className="physics1">
                <a download href={secfinphy1} className="button">
                  <button>물리학1 시험지</button>
                </a>
                <a download href={secfinphy1ans} className="button">
                  <button>물리학1 정답지</button>
                </a>
              </div>
              <div className="blank" />

              <div className="chem1">
                <a download href={secfinche1} className="button">
                  <button>화학1 시험지</button>
                </a>
                <a download href={secfinche1ans} className="button">
                  <button>화학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="bio1">
                <a download href={secfinbio1} className="button">
                  <button>생명과학1 시험지</button>
                </a>
                <a download href={secfinbio1ans} className="button">
                  <button>생명과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="earth1">
                <a download href={secfinearth1} className="button">
                  <button>지구과학1 시험지</button>
                </a>
                <a download href={secfinearth1ans} className="button">
                  <button>지구과학1 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="physics2">
                <a download href={secfinphy2} className="button">
                  <button>물리학2 시험지</button>
                </a>
                <a download href={secfinphy2ans} className="button">
                  <button>물리학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="chem2">
                <a download href={secfinche2} className="button">
                  <button>화학2 시험지</button>
                </a>
                <a download href={secfinche2ans} className="button">
                  <button>화학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="bio2">
                <a download href={secfinbio2} className="button">
                  <button>생명과학2 시험지</button>
                </a>
                <a download href={secfinbio2ans} className="button">
                  <button>생명과학2 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
            <div className="etc">
              <div className="jap">
                <a download href={secfinjapchi} className="button">
                  <button>일본어+중국어 시험지</button>
                </a>
                <a download href={secfinjapans} className="button">
                  <button>일본어 정답지</button>
                </a>
                <a download href={secfinchians} className="button">
                  <button>중국어 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="prgm">
                <a download href={secfinpr} className="button">
                  <button>프로그래밍 시험지</button>
                </a>
                <a download href={secfinprans} className="button">
                  <button>프로그래밍 정답지</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
