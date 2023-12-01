import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd1c21e798be8e69642bc9e5fdadcfaf6',
};

const fetch = async (endpoint, page, selected) => {
  const ENDPOINTS = {
    trending: '/trending/movie/day',
    movieDetails: `/movie/${selected}`,
  };

  const url = ENDPOINTS[endpoint];
  const parameters = selected ? {} : { page };

  try {
    const response = await axios.get(url, { params: parameters });
    return response.data;
  } catch (error) {
    const errorMessage = `API request failed: ${error.message}`;
    toast.error(`Error fetching data: ${error.message}`);
    throw new Error(errorMessage);
  }
};

export default fetch;
