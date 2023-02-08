import { HeroList } from "../components/HeroList";
import { HomeStyles } from "../styles/HomeStyles";

export const Home = () => {
  return (
    <div className={HomeStyles.homeScreen.homeContainer}>
      <div className={HomeStyles.homeScreen.homeTextContainer}>
        PICK YOUR HERO!!!!!!!!!!!!
      </div>
      <div className={HomeStyles.homeScreen.homeHeroListContainer}>
        <HeroList />
      </div>
    </div>
  );
};
