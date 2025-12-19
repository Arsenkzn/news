import { CategoriesApiResponce } from '@/shared/Interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'S6ns1XyKpARWfqvG51wCQtB20KfD2S9w4nG-TO3GWbZYvia3';
const BASE_URL = 'https://api.currentsapi.services/v1';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<CategoriesApiResponce, null>({
      query: () => {
        return {
          url: '/available/categories',
          params: {
            apiKey: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
