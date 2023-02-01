import { getDotaData } from "../services/dotaHeroApi";
import { useState, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [heroNames, setHeroNames] = useState([]);

  useEffect(() => {
    getDotaData().then((dataPromise) => {
      setHeroNames(dataPromise);
    });
  }, []);

  return (
    <div>
      {heroNames.map((item: any) => (
        <>
          <div className="Home-heroName" key={item.id}>
            {item.localized_name}
          </div>
          <div className="Home-heroAttribute" key={item.id}>
            {item.primary_attr}
          </div>
        </>
      ))}
    </div>
  );
};
