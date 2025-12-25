import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* ✅ Global Tailwind styles */
import "./styles/global.css";

/* ✅ Mount React app safely */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
