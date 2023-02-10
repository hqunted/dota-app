import { HeroList } from "../components/HeroList";
import { HomeCarousel } from "../components/HomeCarousel";
import { HomeStyles } from "../styles/HomeStyles";
import { useState } from "react";

export const Home = () => {
  const [hoverValue, setHoverValue] = useState("false");

  return (
    <div className="container mx-auto">
      <div className={HomeStyles.homeScreen.homeContainer}>
        <div className={HomeStyles.homeScreen.homeTextContainer}>
          <div>
            <div>Pick Your Hero</div>
          </div>
        </div>
        <div className={HomeStyles.homeScreen.homeHeroListContainer}>
          <HeroList />
        </div>
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 ">
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};
