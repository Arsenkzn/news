import { CategoriesApiResponce } from './../Interfaces/index';
import axios from 'axios';
import { NewsApiResponce, ParamsType } from '../Interfaces';

const BASE_URL = 'https://api.currentsapi.services/v1';
const API_KEY = 'S6ns1XyKpARWfqvG51wCQtB20KfD2S9w4nG-TO3GWbZYvia3';

export const getNews = async (
  params?: ParamsType
): Promise<NewsApiResponce> => {
  try {
    const {
      page_number = 1,
      page_size = 10,
      category,
      keywords,
    } = params || {};
    const response = await axios.get<NewsApiResponce>(`${BASE_URL}/search`, {
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
    return { news: [], page: 1, status: 'error' };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponce> => {
  try {
    const response = await axios.get<NewsApiResponce>(
      `${BASE_URL}/latest-news`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: 'error' };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponce> => {
  try {
    const response = await axios.get<CategoriesApiResponce>(
      `${BASE_URL}/available/categories`,
      {
        params: {
          apiKey: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: '', status: 'error' };
  }
};
