import { getDotaData } from "../services/dotaHeroApi";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../types";

export const useHeroData = () => {
    
  const [heroes, setHeroes] = useState<Hero[]>([]);
  let navigate = useNavigate();
  useEffect(() => {
    getDotaData().then((dataPromise) => {
      setHeroes(dataPromise);
    });
  }, []);
};
