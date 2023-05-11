import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import Register from "./components/Register";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Auth />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
