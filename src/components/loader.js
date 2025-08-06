import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="pl">
        <div className="pl__dot pl__dot--a"></div>
        <div className="pl__dot pl__dot--b"></div>
        <div className="pl__dot pl__dot--c"></div>
        <div className="pl__dot pl__dot--d"></div>
      </div>
    </div>
  );
};

export default Loader;
