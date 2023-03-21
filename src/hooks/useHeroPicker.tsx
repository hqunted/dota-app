import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const randomHeroNumber = Math.round(Math.random() * heroes.length);

  console.log(randomHeroNumber);
  console.log(getDotaData());

  useEffect(() => {
    getDotaData()
      .then((dataPromise) => {
        console.log(dataPromise);
        setHeroes(dataPromise);
      })
      .catch((error) => {
        console.error("Error fetching Dota data:", error);
      });
  }, []);

  const pickRandomHero = () => {
    return heroes[randomHeroNumber];
  };

  return { heroes, setHeroes, pickRandomHero };
};
