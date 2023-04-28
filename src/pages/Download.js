import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./home.css";
import logo from "../media/daegunlogo.png";

function Home() {
  return (
    <div className="down">
      <h1 className="downtitle">Daegun High School exam Download</h1>
      <div className="down2022">
        <a download href={logo}>
          <button type="submit">download</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
