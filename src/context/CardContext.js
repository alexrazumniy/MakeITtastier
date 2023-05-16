import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  useEffect(() => {
    if (currentUser === null) {
      localStorage.setItem("user", "null");
    } else {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <CardContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CardContext.Provider>
  );
};
