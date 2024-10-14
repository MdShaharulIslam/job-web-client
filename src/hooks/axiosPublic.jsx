import axios from "axios";

// Create an axios instance with baseURL and optional headers
const axiosPublic = axios.create({
  baseURL: "https://job-web-server.vercel.app", // Base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable credentials if needed for authentication
});

export default axiosPublic;
