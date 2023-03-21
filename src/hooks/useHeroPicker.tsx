import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const randomHeroNumber = Math.round(Math.random() * heroes.length);

  const randomNum = 2;

  let counter = 0;
  counter++;
  if (counter === 1) {
    getDotaData()
      .then((dataPromise) => {
        console.log(dataPromise);
        setHeroes(dataPromise);
      })
      .catch((error) => {
        console.error("Error fetching Dota data:", error);
      });
  } else counter = 0;
  console.log(getDotaData());
  const pickRandomHero = () => {
    return heroes[randomHeroNumber];
  };

  return { heroes, setHeroes, pickRandomHero };
};
