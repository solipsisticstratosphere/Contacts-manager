import { createAction, createSlice } from "@reduxjs/toolkit";

// export const setFilter = createAction("contacts/setFilter");

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
// const initialState = {
//   filter: "",
// };
// export default function filterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "contacts/setFilter": {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// }
