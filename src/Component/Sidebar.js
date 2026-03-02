import react from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-4 w-60 text-lg">
      <div className="border-b-2">
        <ul>
          <li>Home</li>
          <Link to="/demo">
            <li>Demo</li>
          </Link>
          <li>Shorts</li>
          <li>Live</li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="font-bold text-xl mt-3  ">Subscription</h1>
        <ul>
          <li>Nasa</li>
          <li>TEDx</li>
          <li>Best Of The Voice</li>
          <li>Book Bird</li>
          <li>BCC News</li>
        </ul>
      </div>
      <div className="border-b-2">
        <h1 className="font-bold text-xl mt-3 ">You</h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Watch later</li>
          <li>Liked videos</li>
          <li>Your videos</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-xl mt-3">Explore</h1>
        <ul>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movie</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
