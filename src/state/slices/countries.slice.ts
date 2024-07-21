import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CountryDetailsType } from "../../Model/country.model";
import axios from "axios";

interface CountriesState {
  value: CountryDetailsType[];
  destination: CountryDetailsType | null;
}

const initialState: CountriesState = {
  value: [],
  destination: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    const countries: CountryDetailsType[] = data;

    return countries;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    onClickDestination(
      state,
      { payload: selectedCountry }: PayloadAction<CountryDetailsType>
    ) {
      state.destination = selectedCountry;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<CountriesState>) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      console.log("success");
      state.value = action.payload;
    });
    builder.addCase(fetchCountries.pending, () => {
      console.log("loading");
    });
    builder.addCase(fetchCountries.rejected, () => {
      console.log("error");
    });
  },
});

export const { onClickDestination } = countriesSlice.actions;

export default countriesSlice;
