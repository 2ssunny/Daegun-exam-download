import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./down.css";
import logo from "../media/daegunlogo.png";
import File2019 from "./File2019";

function Home() {
  return (
    <div className="down">
      <h1 className="downtitle">Daegun High School exam Download</h1>
      <Link to="File2019" className="down-text">
        <span className="title-text2">2019</span>
      </Link>
    </div>
  );
}

export default Home;
