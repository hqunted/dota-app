import { createContext } from "react";
import { useHeroPicker } from "../hooks/useHeroPicker";

export const ProvideHeroData = ({ children }: any) => {
  const { pickRandomHero } = useHeroPicker();
  const Context = createContext({});

  return <Context.Provider value={""}>{children}</Context.Provider>;
};
