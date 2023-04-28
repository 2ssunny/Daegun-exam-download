import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="home_title">Exam information download site</h1>

      <div className="homeexplain">
        <p>webpage for Daegun hish school students</p>
      </div>
    </div>
  );
}

export default Home;
