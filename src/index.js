import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";
import { ParallaxProvider } from "react-scroll-parallax";

const el = document.getElementById("app");

ReactDOM.render(
  <HashRouter base="/">
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </HashRouter>,
  el
);
