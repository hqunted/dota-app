import { useState, useEffect } from "react";
import { Hero } from "../types";
import { getDotaData } from "../services/dotaHeroApi";

export const useHeroPicker = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const randomHeroNumber = Math.round(Math.random() * heroes.length);

  console.log(randomHeroNumber);
  console.log(getDotaData());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromise = await getDotaData();
        console.log(dataPromise);
        setHeroes(dataPromise);
      } catch (error) {
        console.error("Error fetching Dota data:", error);
      }
    };
    fetchData();
  }, []);

  const pickRandomHero = () => {
    return heroes[randomHeroNumber];
  };

  return { heroes, setHeroes, pickRandomHero };
};
