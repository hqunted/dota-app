import { HeroList } from "../components/HeroList";
import { HomeSlider } from "../components/HomeSlider";
import { HomeStyles } from "../styles/HomeStyles";

export const Home = () => {
  return (
    <div>
      <div className={HomeStyles.homeScreen.homeContainer}>
        <div className={HomeStyles.homeScreen.homeTextContainer}>
          PICK YOUR HERO!!!!!!!!!!!!
        </div>
        <div className={HomeStyles.homeScreen.homeHeroListContainer}>
          <HeroList />
        </div>
        <HomeSlider />
      </div>
    </div>
  );
};
