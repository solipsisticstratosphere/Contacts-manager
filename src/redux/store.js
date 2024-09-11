import { configureStore } from "@reduxjs/toolkit";
import contactsData from "../contacts.json";
const initialState = {
  contacts: {
    items: contactsData,
  },
  filter: "", // Add this line to initialize the filter
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
  }
  return state;
};

export const store = configureStore({ reducer: rootReducer });
