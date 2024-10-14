import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "https://job-web-server.vercel.app", // Replace with your actual API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch jobs
export const fetchJobs = async () => {
  try {
    const response = await axiosInstance.get("/jobs", {
      withCredentials: true, // If your API requires credentials
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch jobs");
  }
};

export default axiosInstance;
