import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [toggler, setToggler] = useState(initialState);

  const changeToggle = (toggleValue) => {
    setToggler((prev) => {
      if (typeof toggleValue === "boolean") {
        return toggleValue;
      }
      return !prev;
    });
  };
  return [toggler, changeToggle]
};
