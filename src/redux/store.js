import { configureStore } from "@reduxjs/toolkit";
import contactsData from "../contacts.json";
import filterReducer from "./filtersSlice";

const initialState = {
  contacts: {
    items: contactsData,
  },
  filter: "",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    }
    case "contacts/setFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "contacts/addContact": {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
  }
  return state;
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
