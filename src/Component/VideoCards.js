import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;
  return (
    <div
      className="m-4 p-2 w-96 bg-slate-100 rounded-lg flex justify-center flex-col hover:bg-slate-200 cursor-pointer
    shadow-lg"
    >
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold text-lg pb-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{likeCount} 👍🏻 </li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div>
      <VideoCards info={info} />
      <div className="text-center">
        <button className=" bg-slate-400  text-white font-bold w-[15vw] py-1 rounded-lg  bottom-11 right-5">
          Ad
        </button>
      </div>
    </div>
  );
};
export default VideoCards;
