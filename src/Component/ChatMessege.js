import React from "react";

const ChatMessege = (props) => {
  const { name, message } = props;
  return (
    <div className="flex shadow-lg p-2 m-2 bg-slate-100  ">
      <img
        className="h-8 rounded-full mr-2"
        src="https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
        alt="userimg"
      />
      <span className="font-bold mr-2 text-slate-600">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessege;
