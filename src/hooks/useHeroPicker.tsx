import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const randomHeroNumber = Math.round(Math.random() * heroes.length);

  console.log(randomHeroNumber);
  console.log(heroes);
  useEffect(() => {
    getDotaData().then((dataPromise) => {
      console.log(dataPromise);
      setHeroes(dataPromise);
    });
  }, []);

  const pickRandomHero = () => {
    return heroes[randomHeroNumber];
  };

  console.log(pickRandomHero());
  return { heroes, setHeroes, pickRandomHero };
};
