import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeroMenu } from "./pages/HeroMenu";
import { RouteLayout } from "./layouts/RouteLayout";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <HashRouter basename="/">
      <Routes>
        <Route path="/dota-app" element={<RouteLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="HeroMenu" element={<HeroMenu />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  </BrowserRouter>
);
