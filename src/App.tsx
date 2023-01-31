import React from "react";
import { getHeroNames, getHeroAttributes } from "./services/dotaHeroApi";
import "./App.css";

const App = () => {
  return (
    <div>
      
      <div>{`${getHeroNames()} has ${getHeroAttributes()}`}</div>
    </div>
  );
};

export default App;
