import React from "react";

import "./year.css";

import firmidmun from "../media/2020/1stsem/midterm/2020_1_mid_test/01-09.pdf";
import firmidmath1 from "../media/2020/1stsem/midterm/2020_1_mid_test/10-13.pdf";
import firmidmath2 from "../media/2020/1stsem/midterm/2020_1_mid_test/14-17.pdf";
import firmideng1 from "../media/2020/1stsem/midterm/2020_1_mid_test/18-29.pdf";
import firmidkeco from "../media/2020/1stsem/midterm/2020_1_mid_test/30-33.pdf";
import firmidwhis from "../media/2020/1stsem/midterm/2020_1_mid_test/34-40.pdf";
import firmidphy1 from "../media/2020/1stsem/midterm/2020_1_mid_test/41-45.pdf";
import firmidche1 from "../media/2020/1stsem/midterm/2020_1_mid_test/46-51.pdf";
import firmidbio1 from "../media/2020/1stsem/midterm/2020_1_mid_test/52-57.pdf";
import firmidearth1 from "../media/2020/1stsem/midterm/2020_1_mid_test/58-64.pdf";
import firmidchi from "../media/2020/1stsem/midterm/2020_1_mid_test/65-66_67-67_merged.pdf";
import firmidpr from "../media/2020/1stsem/midterm/2020_1_mid_test/68-69.pdf";

import firmidmunans from "../media/2020/1stsem/midterm/2020_1_mid_ans/01-03.pdf";
import firmidmath1ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/04-05.pdf";
import firmidmath2ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/06-07.pdf";
import firmideng1ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/08-09.pdf";
import firmidkecoans from "../media/2020/1stsem/midterm/2020_1_mid_ans/12-13.pdf";
import firmidwhisans from "../media/2020/1stsem/midterm/2020_1_mid_ans/14-15.pdf";
import firmidphy1ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/16-17.pdf";
import firmidche1ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/18-19.pdf";
import firmidbio1ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/20-21.pdf";
import firmidearth1ans from "../media/2020/1stsem/midterm/2020_1_mid_ans/22-23.pdf";
import firmidjapans from "../media/2020/1stsem/midterm/2020_1_mid_ans/24-24.pdf";
import firmidchians from "../media/2020/1stsem/midterm/2020_1_mid_ans/25-25.pdf";
import firmidprans from "../media/2020/1stsem/midterm/2020_1_mid_ans/26-26.pdf";

import firfinmun from "../media/2020/1stsem/final/2020_1_fin_test/01-08.pdf";
import firfinmath1 from "../media/2020/1stsem/final/2020_1_fin_test/09-12.pdf";
import firfinmath2 from "../media/2020/1stsem/final/2020_1_fin_test/13-16.pdf";
import firfineng1 from "../media/2020/1stsem/final/2020_1_fin_test/17-24.pdf";
import firfinkgeo from "../media/2020/1stsem/final/2020_1_fin_test/25-28.pdf";
import firfinwhis from "../media/2020/1stsem/final/2020_1_fin_test/29-33.pdf";
import firfinlaw from "../media/2020/1stsem/final/2020_1_fin_test/34-40.pdf";
import firfinphy1 from "../media/2020/1stsem/final/2020_1_fin_test/41-45.pdf";
import firfinche1 from "../media/2020/1stsem/final/2020_1_fin_test/46-51.pdf";
import firfinbio1 from "../media/2020/1stsem/final/2020_1_fin_test/52-57.pdf";
import firfinearth1 from "../media/2020/1stsem/final/2020_1_fin_test/58-63.pdf";
import firfinjap from "../media/2020/1stsem/final/2020_1_fin_test/64-65.pdf";
import firfinchi from "../media/2020/1stsem/final/2020_1_fin_test/66-68.pdf";
import firfinpr from "../media/2020/1stsem/final/2020_1_fin_test/69-71.pdf";

import firfinmunans from "../media/2020/1stsem/final/2020_1_fin_ans/01-03.pdf";
import firfinmath1ans from "../media/2020/1stsem/final/2020_1_fin_ans/04-05.pdf";
import firfinmath2ans from "../media/2020/1stsem/final/2020_1_fin_ans/06-07.pdf";
import firfineng1ans from "../media/2020/1stsem/final/2020_1_fin_ans/08-09.pdf";
import firfinkgeoans from "../media/2020/1stsem/final/2020_1_fin_ans/10-11.pdf";
import firfinwhisans from "../media/2020/1stsem/final/2020_1_fin_ans/12-13.pdf";
import firfinlawans from "../media/2020/1stsem/final/2020_1_fin_ans/14-15.pdf";
import firfinphy1ans from "../media/2020/1stsem/final/2020_1_fin_ans/16-17.pdf";
import firfinche1ans from "../media/2020/1stsem/final/2020_1_fin_ans/18-19.pdf";
import firfinbio1ans from "../media/2020/1stsem/final/2020_1_fin_ans/20-21.pdf";
import firfinearth1ans from "../media/2020/1stsem/final/2020_1_fin_ans/22-23.pdf";
import firfinjapans from "../media/2020/1stsem/final/2020_1_fin_ans/24-25.pdf";
import firfinchians from "../media/2020/1stsem/final/2020_1_fin_ans/26-26.pdf";
import firfinprans from "../media/2020/1stsem/final/2020_1_fin_ans/27-27.pdf";

import secmiddok from "../media/2020/2ndsem/midterm/2020_2_mid_test/01-08.pdf";
import secmidmath2 from "../media/2020/2ndsem/midterm/2020_2_mid_test/09-12.pdf";
import secmidmijeok from "../media/2020/2ndsem/midterm/2020_2_mid_test/13-16.pdf";
import secmidhwak from "../media/2020/2ndsem/midterm/2020_2_mid_test/17-20.pdf";
import secmidgiha from "../media/2020/2ndsem/midterm/2020_2_mid_test/21-24.pdf";
import secmideng2 from "../media/2020/2ndsem/midterm/2020_2_mid_test/25-32.pdf";
import secmidphy1 from "../media/2020/2ndsem/midterm/2020_2_mid_test/39-43.pdf";
import secmidche1 from "../media/2020/2ndsem/midterm/2020_2_mid_test/44-48.pdf";
import secmidearth1 from "../media/2020/2ndsem/midterm/2020_2_mid_test/49-54.pdf";
import secmidjap from "../media/2020/2ndsem/midterm/2020_2_mid_test/55-57.pdf";
import secmidchi from "../media/2020/2ndsem/midterm/2020_2_mid_test/58-60.pdf";
import secmidpr from "../media/2020/2ndsem/midterm/2020_2_mid_test/61-62.pdf";

import secmiddokans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/01-03.pdf";
import secmidmath2ans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/04-05.pdf";
import secmidmijeokans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/06-07.pdf";
import secmidhwakans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/08-09.pdf";
import secmidgihaans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/10-11.pdf";
import secmideng2ans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/12-13.pdf";
import secmidphy1ans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/16-18.pdf";
import secmidche1ans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/19-21.pdf";
import secmidearth1ans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/22-23.pdf";
import secmidjapans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/24-25.pdf";
import secmidprans from "../media/2020/2ndsem/midterm/2020_2_mid_ans/26-27.pdf";

import secfindok from "../media/2020/2ndsem/final/2020_2_fin_test/01-12.pdf";
import secfinmath2 from "../media/2020/2ndsem/final/2020_2_fin_test/13-16.pdf";
import secfinmijeok from "../media/2020/2ndsem/final/2020_2_fin_test/17-20.pdf";
import secfinhwak from "../media/2020/2ndsem/final/2020_2_fin_test/21-24.pdf";
import secfingiha from "../media/2020/2ndsem/final/2020_2_fin_test/25-28.pdf";
import secfineng2 from "../media/2020/2ndsem/final/2020_2_fin_test/29-36.pdf";
import secfinyunsa from "../media/2020/2ndsem/final/2020_2_fin_test/37-42.pdf";
import secfinphy1 from "../media/2020/2ndsem/final/2020_2_fin_test/43-47.pdf";
import secfinche1 from "../media/2020/2ndsem/final/2020_2_fin_test/48-53.pdf";
import secfinbio1 from "../media/2020/2ndsem/final/2020_2_fin_test/54-60.pdf";
import secfinearth1 from "../media/2020/2ndsem/final/2020_2_fin_test/61-63.pdf";
import secfinjapchi from "../media/2020/2ndsem/final/2020_2_fin_test/64-66.pdf";

import secfindokans from "../media/2020/2ndsem/final/2020_2_fin_ans/01-02.pdf";
import secfinmath2ans from "../media/2020/2ndsem/final/2020_2_fin_ans/03-04.pdf";
import secfinmijeokans from "../media/2020/2ndsem/final/2020_2_fin_ans/05-06.pdf";
import secfinhwakans from "../media/2020/2ndsem/final/2020_2_fin_ans/07-08.pdf";
import secfingihaans from "../media/2020/2ndsem/final/2020_2_fin_ans/09-10.pdf";
import secfineng2ans from "../media/2020/2ndsem/final/2020_2_fin_ans/11-12.pdf";
import secfinyunsaans from "../media/2020/2ndsem/final/2020_2_fin_ans/13-14.pdf";
import secfinphy1ans from "../media/2020/2ndsem/final/2020_2_fin_ans/15-16.pdf";
import secfinche1ans from "../media/2020/2ndsem/final/2020_2_fin_ans/17-19.pdf";
import secfinbio1ans from "../media/2020/2ndsem/final/2020_2_fin_ans/20-21.pdf";
import secfinearth1ans from "../media/2020/2ndsem/final/2020_2_fin_ans/22-23.pdf";
import secfinjapans from "../media/2020/2ndsem/final/2020_2_fin_ans/24-25.pdf";

function Home() {
  return (
    <div className="downyear">
      <h1 className="downyeartitle">2020 Daegun highschool exam</h1>
      <div className="down2020">
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
                <a download href={firmidkeco} className="button">
                  <button>지리 시험지</button>
                </a>
                <a download href={firmidkecoans} className="button">
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

            <div className="social"></div>
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
              <div className="earth1">
                <a download href={secmidearth1} className="button">
                  <button>지구과학1 시험지</button>
                </a>
                <a download href={secmidearth1ans} className="button">
                  <button>지구과학1 정답지</button>
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
                <a download href={secmidjapans} className="button">
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
            </div>
            <div className="etc">
              <div className="jap">
                <a download href={secfinjapchi} className="button">
                  <button>일본어+중국어 시험지</button>
                </a>
                <a download href={secfinjapans} className="button">
                  <button>일본어+중국어 정답지</button>
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
