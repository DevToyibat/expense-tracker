// instead of using postman, we want to create a state that will help load and get automatically.
// to create a store, its like our state in redux.

import { configureStore } from "@reduxjs/toolkit";

import { expenseApi } from "./expenseTrackerApi";

export const store = configureStore({
  reducer: {
    [expenseApi.reducerPath]: expenseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expenseApi.middleware),
});
