import react, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contant";
import VideoCards, { AdVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";
import Watchpage from "./Watchpage";
const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard  info={videos[10]} />}
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} kay={video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
      
    </div>
  );
};
export default Videocontainer;
