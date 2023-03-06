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

  const pickRandomHero = () => {
    return heroes[Math.round(Math.random() * heroes.length)];
  };
  console.log(pickRandomHero());

  return { heroes, setHeroes, pickRandomHero };
};
