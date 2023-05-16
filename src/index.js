import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CardProvider } from "./context/CardContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CardProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CardProvider>
    </AuthProvider>
  </React.StrictMode>
);
