// feetching our api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:5000";

export const expenseApi = createApi({
  reducerPath: "expenseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURI,
  }),
  //   tagTypes: ["categories", "transactions"],
  // endpoint is like /api/transactions after the base URI
  // join the baseuri to thee endpoint https://localhost:5000/api/categories. we also get for labels
  // we are using geet cos we need the data.
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags: ["transactions"],
    }),
    // to manipulate data i.e to add or delete, u use mutation not query. query helps get data
    // mutation takes 3 parameters url, post, body.
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/api/transactions",
        method: "POST",
        body: initialTransaction,
      }),
      invalidateTags: ["transactions"],
    }),
    deleteTransaction: builder.mutation({
      query: ({ id }) => ({
        url: `/api/transactions/${id}`,
        // url: "/api/transactions",
        method: "DELETE",
        body: id,
      }),
      invalidateTags: ["transactions"],
    }),
  }),
});

// to export this and import it in the store to be used and form
export const {
  useGetCategoriesQuery,
  useGetLabelsQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = expenseApi;
