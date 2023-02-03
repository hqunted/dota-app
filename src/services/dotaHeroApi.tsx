import axios from "axios";

const apiURL = "https://api.opendota.com/api/heroes";

export const getDotaData = async () => {
  try {
    const { data: response} = await axios.get(apiURL);
    return response;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
