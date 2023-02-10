import { HeroList } from "../components/HeroList";
import { HomeCarousel } from "../components/HomeCarousel";
import { HomeStyles } from "../styles/HomeStyles";

export const Home = () => {
  return (
    <div>
      <div className={HomeStyles.homeScreen.homeContainer}>
        <div className={HomeStyles.homeScreen.homeTextContainer}>
          <div>
            <div>Roshan's Hero Pick Game!</div>
          </div>
        </div>
        <div className={HomeStyles.homeScreen.homeHeroListContainer}>
          <HeroList />
        </div>
        <div className={HomeStyles.carouselScreen.carouselContainer}>
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};
