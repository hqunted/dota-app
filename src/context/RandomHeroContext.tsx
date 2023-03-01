import { createContext } from "react";
import { useHeroPicker } from "../hooks/useHeroPicker";

const { pickRandomHero, heroes } = useHeroPicker();
const Context = createContext({});
export const ProvideHeroData = (children: any) => {
  return (
    <Context.Provider value={pickRandomHero()}>{children}</Context.Provider>
  );
};
