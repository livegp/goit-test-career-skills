import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertApi = createApi({
  reducerPath: 'advert',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65678b2964fcff8d73109045.mockapi.io',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetAdvertsQuery } = advertApi;
