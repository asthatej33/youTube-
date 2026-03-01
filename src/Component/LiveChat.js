import { useDispatch, useSelector } from "react-redux";
import ChatMessege from "./ChatMessege";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/chatSlice";
import { getRandomName, getRandomMessage } from "../utils/helper";
const LiveChat = () => {
  const chatMesseges = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [myMessege, setMyMessege] = useState("");
  useEffect(() => {
    const time = setInterval(() => {
      //   console.log("hello astha");
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(),
        }),
      );
    }, 2000);
    return () => clearInterval(time);
  }, []);

  return (
    <div className="h-[60vh] flex flex-col justify-end  bg-slate-100 w-[60vh] ml-20  rounded-lg p-5 border-4 border-slate-200">
      <div className="overflow-y-scroll pb-2">
        {chatMesseges.map((singleMessege) => (
          <ChatMessege
            name={singleMessege.name}
            message={singleMessege.message}
          />
        ))}
      </div>
      <form
        className="text-center flex justify-evenly"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "astha tejani",
              message: myMessege,
            }),
          );
          setMyMessege(" ");
        }}
      >
        <input
          value={myMessege}
          onChange={(e) => {
            setMyMessege(e.target.value);
            console.log(e.target.value);
          }}
          type="text"
          placeholder="put your messege "
          className="w-96 rounded-lg p-2"
        />
        <button className="font-bold  bg-slate-500 text-white text-center p-2 rounded-lg ">
          send
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
