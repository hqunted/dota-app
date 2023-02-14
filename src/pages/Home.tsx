import { HeroList } from "../components/HeroList";
import { Carousel } from "../components/Carousel";
import { HomeStyles } from "../styles/HomeStyles";
import { Direction } from "../components/Carousel";
import classNames from "classnames";

export const Home = () => {
  return (
    <div>
      <div className={HomeStyles.homeScreen.homeContainer}>
        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <Carousel direction={Direction.LEFT} />
        </div>

        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <Carousel direction={Direction.RIGHT} />
        </div>

        <img
          alt="question"
          src={require("../images/questionmark.png")}
          className="object-center mx-auto scale-75 max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:scale-100 "
        />

        <div className={HomeStyles.homeScreen.homeTextContainer}>
          <div>
            <div>Roshan's Pick Game</div>
          </div>
        </div>
        <div className={HomeStyles.homeScreen.homeHeroListContainer}>
          <HeroList />
        </div>
        <text
          className={classNames(
            " opacity-0 hover:opacity-100 absolute text-4xl tracking-widest font-Blaka Hollow text-transparent content-center leading-loose bg-gray-400 bg-clip-text "
          )}
        >
          ASDASFONQWOINQIONWQNIOQWINOQWIOP
        </text>
      </div>
    </div>
  );
};
