import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { HeroMenu } from "./pages/HeroMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/HeroMenu" element={<HeroMenu />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
