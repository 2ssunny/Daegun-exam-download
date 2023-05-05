import { Link } from "react-router-dom";
import React from "react";

import "./nav.css";
import logo from "../media/daegunlogo_negative.png";

function App() {
  return (
    <div>
      <header className="title-header">
        <Link to="/" className="tltle-text">
          <img src={logo} className="title-logo" alt="logo" />
        </Link>

        <Link to="About" className="tltle-text">
          <span className="title-text2">About</span>
        </Link>

        <Link to="Download" className="tltle-text">
          <span className="title-text2">Download</span>
        </Link>
      </header>
    </div>
  );
}

export default App;
