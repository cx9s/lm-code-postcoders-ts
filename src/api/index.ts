import axios from "axios";
import { Place } from "../types/Area";

export const getAreaData = async (postcode: string) => {
  const { data } = await axios.get(`https://api.zippopotam.us/GB/${postcode}`);
  console.log(data.places);

  return data.places as Array<Place>;
};
