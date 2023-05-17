import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { MenuProvider } from "./context/MenuContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <MenuProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuProvider>
    </AuthProvider>
  </React.StrictMode>
);
