import axios from 'axios';
// console.log("process : " + process.env.VITE_API_URL)
const apiURL = import.meta.env.VITE_API_URL!
// console.log("import : " + import.meta.env.VITE_API_URL)
const api = axios.create({
  baseURL: apiURL.toString(),
});

export default api;
