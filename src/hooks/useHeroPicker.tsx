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

  const heroData = () => {
    const heroData = Object.entries(heroes).map(([key, value]) => {
      return value;
    });
    return heroData;
  };

  const randomHeroPicker = () => {
    const randomHeroId =
      heroData()[Math.round(Math.random() * heroData().length)];
    return randomHeroId;
  };

  return { heroes, setHeroes, randomHeroPicker, heroData };
};
