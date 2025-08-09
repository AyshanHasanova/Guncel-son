import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1", credentials: "include" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
        credentials: "include", 
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.util.resetApiState());
        } catch (err) {
          console.error("Logout failed:", err);
        }
      },
    }),
    getUserProfile: builder.query({
      query: () => "/me",
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/password/forget",
        method: "POST",
        body: data,
      }),
    }),
    
    // YENİ ƏLAVƏ OLUNMUŞ HİSSƏ
    resetPassword: builder.mutation({
      query: ({ token, data }) => ({
        url: `/password/reset/${token}`,
        method: "PUT",
        body: data,
      }),
    }),
    // YENİ ƏLAVƏ OLUNMUŞ HİSSƏ SONU

  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useForgotPasswordMutation,
  
  // YENİ ƏLAVƏ OLUNMUŞ HOOK
  useResetPasswordMutation,
  // YENİ ƏLAVƏ OLUNMUŞ HOOK SONU
} = userApi;
