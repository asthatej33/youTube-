import React, { useState, useEffect } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contant";
import store from "../utils/store";
import { cacheResult, searchSlice } from "../utils/searchSlice";

const Head = () => {
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetions, setShowSuggetions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggetions(searchCache[searchQuery]);
      } else getSearchSuggetion();
      // console.log("astha");
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonResult = await data.json();
    // console.log(jsonResult);
    setSuggetions(jsonResult);

    //set this api data inside cacheResult
    dispatch(
      cacheResult({
        [searchQuery]: jsonResult,
      }),
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex items-center justify-between px-4 py-5 m-5 shadow-lg ">
      <div className="flex items-center gap-2 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 pr-5 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjY4CgFVaC-DRksvSVgMDfsRUGo8ckTNcIUA&s"
          alt="menu"
        />

        <a href="/">
          <img
            className="h-12"
            alt="logo"
            src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg"
          />
        </a>
      </div>
      <div>
        <div className="flex items-center">
          <input
            onChange={(e) => {
              //  console.log(e.target.value);
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
            value={searchQuery}
            type="text"
            className="border border-slate-200 rounded-l-full w-[45vw] p-3"
          />
          <button className="border border-transparent rounded-r-full w-[7vw] p-3 bg-slate-400 font-bold text-white">
            Search
          </button>
        </div>
        {showSuggetions && searchQuery && suggetions.length > 0 && (
          <ul className="bg-slate-50 w-[45vw] absolute rounded-lg shadow-2xl p-4">
            {suggetions.map((item) => (
              <li
                key={item.word}
                className="pb-2 text-lg shadow-lg rounded-lg p-2 bg-white hover:bg-slate-50"
              >
                {item.word}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center gap-3 ">
        <button className="rounded-2xl font-bold text-white bg-slate-400 p-2">
          +Create
        </button>
        <img
          alt="bell"
          className="h-[4vh]"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg"
        />
        <img
          alt="user"
          className="h-[4vh]"
          src="https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
