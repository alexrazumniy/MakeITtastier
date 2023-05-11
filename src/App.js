import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./css/main.css";
import { AuthContext } from "./context/AuthContext";

// const PrivateRoute = ({ children }) => {
//   let { currentUser } = useContext(AuthContext);
//   console.log(AuthContext);
//   if (currentUser === null) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />
        <Route path="/reg" element={<Register />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Auth />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
