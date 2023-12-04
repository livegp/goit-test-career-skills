import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl = '' } = {}) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError;
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export const advertApi = createApi({
  reducerPath: 'advert',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://65678b2964fcff8d73109045.mockapi.io',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getAll: builder.query({
      query: () => ({
        url: '/advert',
        method: 'get',
      }),
      providesTags: ['Advert'],
    }),
    getById: builder.query({
      query: id => ({
        url: `advert/${id}`,
        method: 'get',
      }),
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery } = advertApi;
