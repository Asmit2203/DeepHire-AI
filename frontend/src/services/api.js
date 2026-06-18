import axios from "axios";

const api = axios.create({
  baseURL: "https://deephire-ai-ty1s.onrender.com/"
});

export default api;