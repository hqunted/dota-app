import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const randomHeroNumber = Math.round(Math.random() * heroes.length);

  const randomNum = 2;
  console.log(randomHeroNumber);
  console.log(getDotaData());
  useEffect(() => {
    console.log(randomNum);
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

  console.log(pickRandomHero());
  return { heroes, setHeroes, pickRandomHero };
};
