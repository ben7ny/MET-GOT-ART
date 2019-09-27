import React from "react";
import MetPics from "./MetPics";
import ApiFetcher from "./ApiFetcher";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ApiFetcher />
      <MetPics />
    </div>
  );
};

export default App;
