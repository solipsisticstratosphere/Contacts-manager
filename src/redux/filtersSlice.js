import { createAction } from "@reduxjs/toolkit";

export const setFilter = createAction("contacts/setFilter");

const initialState = {
  filter: "",
};
export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/setFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
}
