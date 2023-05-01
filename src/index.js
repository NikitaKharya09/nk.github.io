import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { ParallaxProvider } from "react-scroll-parallax";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    ),
  },
  {
    path: "nikita-kharya",
    element: (
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
