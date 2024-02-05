import axios from "axios";
import * as c from "../api/constant";

// ? REGISTRATION API
export const newsall = async (data) => {
  try {
    const url = c.NEWS;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};

export const entertainmentAll = async (data) => {
  try {
    const url = c.ENTERTAINMENT;
    const res = await axios.get(url, data);
    return res;
  } catch (e) {
    return e.response;
  }
};
