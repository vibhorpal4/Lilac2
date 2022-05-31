import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = `http://localhost:5000`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: `/api/v1/auth/register`,
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `/api/v1/auth/login`,
        method: "POST",
        body,
      }),
    }),
    logout: builder.query({
      query: () => `/api/v1/auth/logout`,
    }),
  }),
});

export const { useLogoutQuery, useLoginMutation, useRegisterMutation } =
  authApi;
