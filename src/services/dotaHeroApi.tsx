import axios from "axios";
import { useState } from "react";

const apiURL = "https://api.opendota.com/api/heroes";

export const getDotaData = async () => {
  try {
    const { data: response } = await axios.get(apiURL);
    return response;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const getHeroNames = () => {
  const [heroName, SetHeroName] = useState();
  getDotaData().then((data) => {
    SetHeroName(data);
  });
  return heroName;
};

export const getHeroAttributes = () => {
  getDotaData().then((data) => {
    data.forEach((e: any) => {
      console.log(e.primary_attr);
    });
  });
};
