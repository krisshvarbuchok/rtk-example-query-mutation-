import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const datesApi = createApi({
  reducerPath: "datesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SERVER_URL_LOCAL}/`,
  }),
  endpoints: (builder) => ({
    getDates: builder.query({
      query: () => {
        return {
          url: `dates`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetDatesQuery,
} = datesApi;
