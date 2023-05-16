import { useState } from "react";

export const withToggler = (WrappedComponent) => {
  return (props) => {
    const [toggled, setToggled] = useState(false);

    const changeToggle = (toggleStatus) => {
      setToggled((prev) => {
        if (typeof toggleStatus === "boolean") {
          return toggleStatus;
        }
        return !prev;
      });
    };

    return (
      <WrappedComponent
        {...props}
        toggled={toggled}
        changeToggle={changeToggle}
      />
    );
  };
};
