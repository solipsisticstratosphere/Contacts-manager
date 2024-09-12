import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { setFilter } = slice.actions;
export default slice.reducer;
