import { createAction } from "@reduxjs/toolkit";
import contactsData from "../contacts.json";
export const deleteContact = createAction("contacts/deleteContact");
export const addContact = createAction("contacts/addContact");

const initialState = {
  contacts: {
    items: contactsData,
  },
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,

        items: [...state.contacts.items, action.payload],
      };
    }
    case "contacts/deleteContact": {
      return {
        ...state,

        items: state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}
