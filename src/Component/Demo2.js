import React from "react";
import { useState } from "react";
import { useRef } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, sety] = useState(0);
  const ref = useRef(0);
  return (
    <div className="w-96 h-96 border p-2 ml-5">
      <button
        className="bg-blue-950 p-2 m-2 text-white font-bold"
        onClick={() => {
          x = x + 1;
          console.log("x= ", x);
        }}
      >
        increase
      </button>
      <span className="font-bold text-white bg-slate-600 rounded-full p-4">
        {" "}
        x={x}
      </span>

      <button
        className="bg-blue-950 p-2 m-2 text-white font-bold"
        onClick={() => {
          sety(y + 1);
          console.log("y =", y);
        }}
      >
        increase
      </button>
      <span className="font-bold text-white bg-slate-600 rounded-full p-4">
        {" "}
        state= {y}
      </span>

      <button
        className="bg-blue-950 p-2 m-2 text-white font-bold"
        onClick={() => {
          ref.current = ref.current + 1;
          console.log("ref = ", ref.current);
        }}
      >
        increase
      </button>
      <span className="font-bold text-white bg-slate-600 rounded-full p-4">
        {" "}
        ref= {ref.current}
      </span>
    </div>
  );
};

export default Demo2;
