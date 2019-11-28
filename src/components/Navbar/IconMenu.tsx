import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";

const IconMenu = () => {
  const [state, changeState] = useState({ crossed: true });

  const not = () => {
    changeState({
      crossed: !state.crossed
    });
  };

  return (
    <>
      <div
        className={`${state.crossed ? "menu" : "cross"}`}
        onClick={() => not()}
      >
        <span className="bar" />
      </div>
      <div
        className={`${state.crossed ? "overlay hidden" : "overlay"}`}
        onClick={() => not()}
      >
        <Tabs not={not.bind(state)} />
      </div>
    </>
  );
};

export default IconMenu;