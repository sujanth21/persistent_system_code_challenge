import axios from "axios";

// Get data from API
export const getData = async (api_url) => {
  return await axios.get(api_url);
};
