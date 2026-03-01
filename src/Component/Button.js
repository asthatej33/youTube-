import React from "react";
import ButtonList from "./ButtonList";
const Button = ({name}) => {
  return <div>
    <button className="rounded-lg bg-slate-200 ml-4 h-10 px-5 font-bold">{name}</button>
  </div>;
};

export default Button;
