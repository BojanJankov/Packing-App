import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../../Pages/TripDetailsPage/TripDetailsPage";

interface tripDetailsState {
  value: FormValues | null;
}

const initialState: tripDetailsState = {
  value: null,
};

const tripDetailsSlice = createSlice({
  name: "tripDetails",
  initialState,
  reducers: {
    onSubmit(state, { payload: data }: PayloadAction<FormValues>) {
      state.value = data;
    },
  },
});

export const { onSubmit } = tripDetailsSlice.actions;

export default tripDetailsSlice;
