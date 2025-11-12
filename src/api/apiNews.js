import axios from 'axios';

console.log('API Key:', import.meta.env.VITE_NEWS_API_KEY);
console.log('Base URL:', import.meta.env.VITE_NEWS_BASE_API_URL);

const BASE_URL = 'https://api.currentsapi.services/v1';
const API_KEY = 'S6ns1XyKpARWfqvG51wCQtB20KfD2S9w4nG-TO3GWbZYvia3';

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
