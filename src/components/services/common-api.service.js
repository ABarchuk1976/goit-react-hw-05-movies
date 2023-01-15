import axios from 'axios';
import { toast } from 'react-toastify';
import {
  KEY,
  MEDIA_TYPE,
  TIME_WINDOWS,
  API,
  API_ACTIONS,
} from 'components/constants/api.constants.js';

export const fetchAPIMovies = async (action, search = '') => {
  const URLString =
    action === API_ACTIONS.TRENDING
      ? `${API}/trending/${MEDIA_TYPE}/${TIME_WINDOWS}?api_key=${KEY}`
      : `${API}/search/${MEDIA_TYPE}?api_key=${KEY}&query=${search}`;

  console.log('Search string: ', URLString);

  try {
    const resolve = await axios.get(URLString);

    console.log(resolve.status);
    if (resolve.status !== 200 || !resolve) {
      throw new Error(
        'Search list is empty or service is temporarily unavailable .'
      );
    }
    console.log(resolve.data);

    return resolve.data;
  } catch (error) {
    toast(error.message);
  }
};
