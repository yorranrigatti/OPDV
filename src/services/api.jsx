import axios from "axios";

const api = axios.create({
  baseURL:
    "https://infinite-tor-26437.herokuapp.com/https://opdv-api.herokuapp.com/",
});

export default api;
