import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    getDotaData().then((dataPromise) => {
      setHeroes(dataPromise);
    });
  }, []);

  const pickRandomHero = () =>
    heroes[Math.round(Math.random() * heroes.length)];
  
  return { heroes, setHeroes, pickRandomHero };
};
