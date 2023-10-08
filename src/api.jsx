import axios from 'axios';

// const BASE_API = 'https://pixabay.com/api/';
const API_KEY = '37960657-3cfa1dcb3808e6e9b644b5e90';

async function fetchImages(searchQuery, page) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        q: searchQuery,
        page: page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
      
    });

    if (response.status !== 200) {
      throw new Error('There is now result for your query');

    }
    return response.data;
  } catch (error) {
    throw new Error('There is no result for your query');
  }
}
export { fetchImages };
