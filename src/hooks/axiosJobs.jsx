import axios from 'axios';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://job-web-server.vercel.app', // Your backend URL
  withCredentials: true, // Allow cookies to be sent in cross-origin requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch jobs
export const fetchJobs = async () => {
  try {
    const response = await axiosInstance.get('/jobs');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch jobs');
  }
};

export default axiosInstance;
