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
  const heroId = () => {
    const heroId = heroes.map((data) => {
      return data.id;
    });
    return heroId;
  };

  const randomHeroIdPicker = () => {
    const a = heroId();
    const randomHeroId = a[Math.round(Math.random() * a.length)];
    return randomHeroId;
  };

  return { heroes, setHeroes, randomHeroIdPicker, heroId };
};
