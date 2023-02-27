import { createContext } from "react";
import { useHeroPicker } from "../hooks/useHeroPicker";

const { randomHeroPicker, heroData } = useHeroPicker();
const RandomHeroContext = createContext(heroData()[0]);

export const randomHeroProvider = ({ children }: any) => {
  return (
    <RandomHeroContext.Provider value={randomHeroPicker()}>
      {children}
    </RandomHeroContext.Provider>
  );
};
export default RandomHeroContext;
