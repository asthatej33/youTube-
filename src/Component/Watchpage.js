import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const Watchpage = () => {
  const [searchParams] = useSearchParams();
  //   console.log(searchParams);
  const videoQuery = searchParams.get("v");
  //   console.log(videoQuery);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleMenu);
  }, []);
  return (
    <div className="flex">
      <div>
        <iframe
          width="1000"
          height="600"
          src={`https://www.youtube.com/embed/${videoQuery}?si=7C97A7qW7e8pOp1s`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div>
        <LiveChat />
      </div>
    </div>
  );
};

export default Watchpage;
