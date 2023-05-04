import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // TODO Lario: Change to root domain and fix local proxy
    baseUrl: 'http://localhost:4000/api',
    // baseUrl: '/api',
  }),
  endpoints: () => ({}),
});
