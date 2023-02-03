import React from "react";

import "./App.css";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./Layouts/DefaultLayout";
const App = () => {
  return (
    
      <DefaultLayout>
        <Home />
      </DefaultLayout>
   
  );
};

export default App;
