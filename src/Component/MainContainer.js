import React from "react";
import Videocontainer from "./Videocontainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className = "flex-1 overflow-x-hidden">
      <ButtonList />
      <Videocontainer />
    </div>
  );
};

export default MainContainer;
