import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CursorProvider from "./contexts/Cursor.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CursorProvider>
        <App />
      </CursorProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
