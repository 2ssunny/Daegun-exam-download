import { Link, Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";

import About from "./pages/About.js";
import Nav from "./pages/Nav.js";
import Home from "./pages/Home.js";
import Download from "./pages/Download.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
