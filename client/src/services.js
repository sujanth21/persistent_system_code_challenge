import axios from "axios";

// Get data from API
export const getData = async (api_url) => {
  return await axios.get(api_url);
};

// Upload file call
export const uploadFile = async (data) => {
  return await axios.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
