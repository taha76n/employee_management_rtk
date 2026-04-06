import axios from "axios";

const api = axios.create({
  baseURL: "https://69d3ace6336103955f8f6c0c.mockapi.io/",
  timeout: 5000,
  headers: {
    'Content-Type' : 'application/json'
  }
})

export default api;