import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://65678b2964fcff8d73109045.mockapi.io';

const fetch = async (endpoint, id) => {
  const ENDPOINTS = {
    advert: '/advert',
    advertId: `/advert/${id}`,
  };

  const url = ENDPOINTS[endpoint];

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    const errorMessage = `API request failed: ${error.message}`;
    toast.error(`Error fetching data: ${error.message}`);
    throw new Error(errorMessage);
  }
};

export default fetch;
