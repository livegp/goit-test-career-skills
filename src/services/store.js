import { configureStore } from '@reduxjs/toolkit';

import { advertApi } from './advertsSlice';

export const store = configureStore({
  reducer: {
    [advertApi.reducerPath]: advertApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    advertApi.middleware,
  ],
});

export default store;
