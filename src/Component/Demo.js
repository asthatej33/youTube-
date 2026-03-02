import React from "react";
import { useState, useMemo } from "react";
import { findPrime } from "../utils/helper";
const Demo = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [text, setText] = useState("");

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "cursor-pointer w-[50vh] h-[50vh] border " + (isThemeDark && "bg-black")
      }
    >
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="w-44 border m-4 p-2 font-bold"
        placeholder="add number"
        type="number"
      />
      <button
        className="p-2 bg-slate-600 rounded-lg font-bold text-white"
        onClick={() => setIsThemeDark(!isThemeDark)}
      >
        DARK
      </button>
      <h1>nth prime number : {prime}</h1>
    </div>
  );
};

export default Demo;
