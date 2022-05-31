import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { productApi } from "./services/productApi";
import globalSlice from "./slices/globalSlice";

const store = configureStore({
  reducer: {
    globalSlice: globalSlice,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, productApi.middleware]),
});

export default store;
