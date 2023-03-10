import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const randomHeroNumber = Math.round(Math.random() * heroes.length);

  useEffect(() => {
    getDotaData().then((dataPromise) => {
      setHeroes(dataPromise);
    });
  }, []);

  const pickRandomHero = () => {
    return heroes[randomHeroNumber];
  };

  return { heroes, setHeroes, pickRandomHero };
};
