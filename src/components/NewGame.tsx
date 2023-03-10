import { useNavigate } from "react-router-dom";
import { ProvideHeroData } from "../context/RandomHeroContext";
import { useHeroPicker } from "../hooks/useHeroPicker";

export const NewGame = () => {
  const { pickRandomHero } = useHeroPicker();
  const navigate = useNavigate();
  return (
    <ProvideHeroData>
      <div
        onClick={() => {
          navigate(-1);
          localStorage.setItem("randomHero", JSON.stringify(pickRandomHero()));
        }}
      >
        Congrulations!!! You find the Roshan's secret hero!!--If you want to
        play again click on me--
      </div>
    </ProvideHeroData>
  );
};
