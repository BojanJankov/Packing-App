import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices/items.slice";
import countriesSlice from "./slices/countries.slice";
import tripDetailsSlice from "./slices/tripDetails.slice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    countries: countriesSlice.reducer,
    tripDetails: tripDetailsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
