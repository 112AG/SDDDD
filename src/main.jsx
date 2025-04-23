import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./utils/App";
import DropDownContext from "./context/DropDownContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <DropDownContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DropDownContext>
);
