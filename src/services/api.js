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

export const api = createApi({
  reducerPath: 'advert',
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getAll: builder.query({
      query: ({ page, limit }) => ({
        url: `/advert?page=${page}&limit=${limit}`,
        method: 'get',
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: (result, error, page) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Advert', id })),
              { type: 'Advert', id: 'LIST' },
            ]
          : [{ type: 'Advert', id: 'LIST' }],
    }),
    getById: builder.query({
      query: id => ({
        url: `advert/${id}`,
        method: 'get',
      }),
      providesTags: [{ type: 'Advert', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllQuery, useGetByIdQuery } = api;
