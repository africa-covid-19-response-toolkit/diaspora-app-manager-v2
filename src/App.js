import React from "react";
import SideNav from "./components/Layout/SideNav";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
