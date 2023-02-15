import { HeroList } from "../components/HeroList";
import { Carousel } from "../components/Carousel";
import { HomeStyles } from "../styles/HomeStyles";
import { Direction } from "../components/Carousel";
import classNames from "classnames";
import { useState } from "react";
import { Visibility } from "../types";

export const Home = () => {
  let [hoverValue, setHoverValue] = useState(Visibility.INVISIBLE);

  return (
    <div className={HomeStyles.homeScreen.homeScreenBackground}>
      <div className={HomeStyles.homeScreen.homeContainer}>
        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <Carousel direction={Direction.LEFT} />
        </div>
        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <Carousel direction={Direction.RIGHT} />
        </div>
        <img
          onMouseEnter={() => {
            setHoverValue(Visibility.VISIBLE);
          }}
          onMouseLeave={() => setHoverValue(Visibility.INVISIBLE)}
          alt="question"
          src={require("../images/questionmark.png")}
          className={classNames(
            `${HomeStyles.homeScreen.homeImageContainer.homeQuestionMarkImage}`
          )}
        />
        <div className={HomeStyles.homeScreen.homeTextContainer.homeHeaderText}>
          <div>
            <div>Roshan's Pick Game</div>
          </div>
        </div>
        <div className={HomeStyles.homeScreen.homeHeroListContainer}>
          <HeroList />
        </div>
        <div
          className={classNames(
            hoverValue === Visibility.VISIBLE
              ? (hoverValue = Visibility.VISIBLE)
              : (hoverValue = Visibility.INVISIBLE),
            ` hover:${hoverValue} ${HomeStyles.homeScreen.homeTextContainer.homeHintText}`
          )}
        >
          How To Play: The Roshan picked a hero! you should predict the heroes
          by picking on the select hero part!
        </div>
      </div>
    </div>
  );
};
