import axios from "axios";

export const HTTP = axios.create({
  // baseURL: `http://jsonplaceholder.typicode.com/`,
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Authorization: "Bearer {token}",
  },
});
