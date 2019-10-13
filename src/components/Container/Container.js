import React from "react";
import "./Container.css";

import Main from "./Main/Main";

const Container = () => {
  return (
    <div className="container">
      <div className="top">
        <div className="circle"></div>
        <div className="rectangle"></div>
        <div className="circle"></div>
      </div>
      <Main />
      <div className="bottom">
        <div className="button"></div>
      </div>
    </div>
  );
};

export default Container;
