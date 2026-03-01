import react from "react";
import Button from "./Button";
const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Podcasts",
    "Mixes",
    "comedy clubs",
    "react router",
    "Live",
    "indian pop Music",
    "Thrilled",
    "Gaming",
    "songs",
    "Crickets",
    "soccer",
    "Cooking",
    "velentine",
    "Coding",
    "React",
    "JavaScript",
    "Frontend",
    "Backend",
    "AI",
    "Design",
    "Travel",
    "Fitness",
    "Motivation",
    "Education",
    "Football",
    "Vlogs",
    "Shorts",
    "Trending",
  ];
  return (
    <div className="flex  whitespace-nowrap h-20 overflow-x-scroll ">
      {buttons.map((button) => (
        <Button name={button}  key={button}/>
      ))}
    </div>
  );
};
export default ButtonList;
