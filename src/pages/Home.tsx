import { HeroList } from "../components/HeroList";
import { Carousel } from "../components/Carousel";
import { HomeStyles } from "../styles/HomeStyles";
import { Direction } from "../components/Carousel";
import { QuestionMark } from "../components/QuestionMark";
import { getDotaData } from "../services/dotaHeroApi";

console.log(getDotaData());
export const Home = () => {
  return (
    <div className={HomeStyles.homeScreen.homeScreenBackground}>
      <div className={HomeStyles.homeScreen.homeContainer}>
        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <Carousel direction={Direction.LEFT} />
        </div>

        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <Carousel direction={Direction.RIGHT} />
        </div>
        <QuestionMark></QuestionMark>
        <div className={HomeStyles.homeScreen.homeTextContainer.homeHeaderText}>
          <div>
            <div>Roshan's Pick Game</div>
          </div>
        </div>
        <div className={HomeStyles.homeScreen.homeHeroListContainer}>
          <HeroList />
        </div>
      </div>
    </div>
  );
};
