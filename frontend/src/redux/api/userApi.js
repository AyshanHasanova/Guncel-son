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
        credentials: "include", // cookie də getsin!
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
    resetPassword: builder.mutation({
      query: ({ token, password, confirmPassword }) => ({
        url: `/password/reset/${token}`,
        method: "PUT",
        body: { password, confirmPassword },
      }),
    }),
    // Düzəldilmiş forgotPassword mutation
    // Artıq `body: data` olaraq birbaşa obyekt göndəririk
    forgotPassword: builder.mutation({
      query: (data) => ({ 
        url: "/password/forget", // "forgot" --> "forget" ilə dəyişdirildi
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useResetPasswordMutation,
  useForgotPasswordMutation, // Yeni hook'u export edirik
} = userApi;
