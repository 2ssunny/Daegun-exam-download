import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";

import "./home.css";

function Home() {
  return (
    <div className="down">
      <h1 className="downtitle">Daegun High School exam Download</h1>
      <div>
        <a href="https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe">
          python download
        </a>
      </div>
    </div>
  );
}

export default Home;
