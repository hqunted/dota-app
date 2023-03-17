import { createContext } from "react";
import { useHeroPicker } from "../hooks/useHeroPicker";

export const ProvideHeroData = ({ children }: any) => {
  const { pickRandomHero } = useHeroPicker();
  const Context = createContext({});
  let isPicked = false;

  if (isPicked) {
    localStorage.setItem("randomHero", JSON.stringify(pickRandomHero()));
    isPicked = false;
  } else {
    isPicked = true;
  }

  return <Context.Provider value={isPicked}>{children}</Context.Provider>;
};
