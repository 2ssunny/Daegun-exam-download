import React from "react";

import "./year.css";

import firmidmun from "../media/2022/1stsem/midterm/2201중간문학.pdf";
import firmidmath1 from "../media/2022/1stsem/midterm/2201중간수1.pdf";
import firmidmath2 from "../media/2022/1stsem/midterm/2201중간수2.pdf";
import firmideng1 from "../media/2022/1stsem/midterm/2201중간영1.pdf";
import firmidkgeo from "../media/2022/1stsem/midterm/2201중간한지.pdf";
import firmidwhis from "../media/2022/1stsem/midterm/2201중간세사.pdf";
import firmidlaw from "../media/2022/1stsem/midterm/2201중간정법.pdf";
import firmidphy1 from "../media/2022/1stsem/midterm/2201중간물1.pdf";
import firmidche1 from "../media/2022/1stsem/midterm/2201중간화1.pdf";
import firmidbio1 from "../media/2022/1stsem/midterm/2201중간생1.pdf";
import firmidearth1 from "../media/2022/1stsem/midterm/2201중간지1.pdf";
import firmidjap from "../media/2022/1stsem/midterm/2201중간일어.pdf";
import firmidchi from "../media/2022/1stsem/midterm/2201중간중어.pdf";
import firmidpr from "../media/2022/1stsem/midterm/2201중간프밍.pdf";

import firmidmunans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/01-02.pdf";
import firmidmath1ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/03-04.pdf";
import firmidmath2ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/05-06.pdf";
import firmideng1ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/07-08.pdf";
import firmidkgeoans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/09-10.pdf";
import firmidwhisans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/11-12.pdf";
import firmidlawans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/15-16.pdf";
import firmidphy1ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/17-18.pdf";
import firmidche1ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/19-20.pdf";
import firmidbio1ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/21-22.pdf";
import firmidearth1ans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/23-24.pdf";
import firmidjapans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/25-25.pdf";
import firmidchians from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/26-26.pdf";
import firmidprans from "../media/2022/1stsem/midterm/2022학년도 1학기 중간고사 2학년 문항정보표/27-27.pdf";

import firfinmun from "../media/2022/1stsem/final/2022_1_fin_test/01-10.pdf";
import firfinmath1 from "../media/2022/1stsem/final/2022_1_fin_test/11-14.pdf";
import firfinmath2 from "../media/2022/1stsem/final/2022_1_fin_test/15-18.pdf";
import firfineng1 from "../media/2022/1stsem/final/2022_1_fin_test/19-27.pdf";
import firfinkgeo from "../media/2022/1stsem/final/2022_1_fin_test/28-32.pdf";
import firfinwhis from "../media/2022/1stsem/final/2022_1_fin_test/33-44.pdf";
import firfinlaw from "../media/2022/1stsem/final/2022_1_fin_test/45-48.pdf";
import firfinphy1 from "../media/2022/1stsem/final/2022_1_fin_test/49-54.pdf";
import firfinche1 from "../media/2022/1stsem/final/2022_1_fin_test/55-60.pdf";
import firfinbio1 from "../media/2022/1stsem/final/2022_1_fin_test/61-66.pdf";
import firfinearth1 from "../media/2022/1stsem/final/2022_1_fin_test/67-72.pdf";
import firfinjap from "../media/2022/1stsem/final/2022_1_fin_test/73-75.pdf";
import firfinchi from "../media/2022/1stsem/final/2022_1_fin_test/76-78.pdf";
import firfinpr from "../media/2022/1stsem/final/2022_1_fin_test/79-81.pdf";
import firfinai from "../media/2022/1stsem/final/2022_1_fin_test/82-85.pdf";

import firfinmunans from "../media/2022/1stsem/final/2022_1_fin_ans/01-02.pdf";
import firfinmath1ans from "../media/2022/1stsem/final/2022_1_fin_ans/03-04.pdf";
import firfinmath2ans from "../media/2022/1stsem/final/2022_1_fin_ans/05-06.pdf";
import firfineng1ans from "../media/2022/1stsem/final/2022_1_fin_ans/07-08.pdf";
import firfinkgeoans from "../media/2022/1stsem/final/2022_1_fin_ans/09-10.pdf";
import firfinwhisans from "../media/2022/1stsem/final/2022_1_fin_ans/11-12.pdf";
import firfinlawans from "../media/2022/1stsem/final/2022_1_fin_ans/13-14.pdf";
import firfinphy1ans from "../media/2022/1stsem/final/2022_1_fin_ans/15-16.pdf";
import firfinche1ans from "../media/2022/1stsem/final/2022_1_fin_ans/17-18.pdf";
import firfinbio1ans from "../media/2022/1stsem/final/2022_1_fin_ans/19-20.pdf";
import firfinearth1ans from "../media/2022/1stsem/final/2022_1_fin_ans/21-22.pdf";
import firfinjapans from "../media/2022/1stsem/final/2022_1_fin_ans/23-24.pdf";
import firfinchians from "../media/2022/1stsem/final/2022_1_fin_ans/25-26.pdf";
import firfinprans from "../media/2022/1stsem/final/2022_1_fin_ans/27-27.pdf";
import firfinaians from "../media/2022/1stsem/final/2022_1_fin_ans/28-28.pdf";

function Home() {
  return (
    <div className="downyear">
      <h1 className="downyeartitle">2022 Daegun highschool exam</h1>
      <div className="down2022">
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
                  <button>프로그래밍 시험지</button>
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
                  <button>프로그래밍 시험지</button>
                </a>
                <a download href={firfinprans} className="button">
                  <button>프로그래밍 정답지</button>
                </a>
              </div>
              <div className="blank" />
              <div className="ai">
                <a download href={firfinai} className="button">
                  <button>인공지능 기초 시험지</button>
                </a>
                <a download href={firfinaians} className="button">
                  <button>인공지능 기초 정답지</button>
                </a>
              </div>
              <div className="blank" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
