import { Link, Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";

import About from "./pages/About.js";
import Nav from "./pages/Nav.js";
import Home from "./pages/Home.js";
import Download from "./pages/Download.js";
import File2020 from "./pages/File2020.js";
import File2021 from "./pages/File2021.js";
import File2022 from "./pages/File2022.js";
import RouteChangeTracker from "./components/RouteChangeTracker";

function App() {
  RouteChangeTracker();
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Download">
            <Route path="" element={<Download />} />
            <Route path="File2020" element={<File2020 />} />
            <Route path="File2021" element={<File2021 />} />
            <Route path="File2022" element={<File2022 />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
