import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = `http://localhost:5000`;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  tagTypes: ["Product", "Cart"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/api/v1/products`,
      providesTags: ["Product"],
    }),

    addToCartProduct: builder.mutation({
      query: (productId) => ({
        url: `/api/v1/cart/${productId}`,
        method: "POST",
      }),
      invalidatesTags: ["Product", "Cart"],
    }),
    removeProductFromCart: builder.mutation({
      query: (productId) => ({
        url: `/api/v1/cart/remove/${productId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Product", "Cart"],
    }),
    emptyCart: builder.mutation({
      query: () => ({
        url: `/api/v1/cart`,
        method: "PUT",
      }),
      invalidatesTags: ["Product", "Cart"],
    }),
    getCart: builder.query({
      query: () => `/api/v1/cart`,
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartProductMutation,
  useEmptyCartMutation,
  useGetAllProductsQuery,
  useGetCartQuery,
  useRemoveProductFromCartMutation,
} = productApi;
