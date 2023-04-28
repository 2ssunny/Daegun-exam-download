import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { useScrollFadeIn } from "../animation.js";

import "./about.css";

function App() {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4, 20),
  };
  return <div className="about"></div>;
}

export default App;
