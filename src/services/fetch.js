import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd1c21e798be8e69642bc9e5fdadcfaf6',
};

async function fetch(endpoint, search, page, selected) {
  const ENDPOINTS = {
    trending: '/trending/movie/day',
    searchMovies: '/search/movie',
    movieDetails: `/movie/${selected}`,
    movieCredits: `/movie/${selected}/credits`,
    movieReviews: `/movie/${selected}/reviews`,
  };

  const url = ENDPOINTS[endpoint];
  const parameters = {
    ...(selected ? {} : { page }),
    ...(search ? { query: search, page } : {}),
  };

  try {
    const response = await axios.get(url, { params: parameters });
    return response.data;
  } catch (error) {
    toast.error(`Error fetching data: ${error.message}`);
    throw new Error(`API request failed: ${error.message}`);
  }
}

export default fetch;
