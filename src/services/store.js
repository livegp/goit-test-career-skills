import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { advertApi } from './api';

export const store = configureStore({
  reducer: {
    [advertApi.reducerPath]: advertApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    advertApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
