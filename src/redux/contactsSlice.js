import { createAction, createSlice } from "@reduxjs/toolkit";
import contactsData from "../contacts.json";

// export const deleteContact = createAction("contacts/deleteContact");
// export const addContact = createAction("contacts/addContact");

// const initialState = {
//   contacts: contactsData,
// };
const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: contactsData,
  },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    },
  },
});
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
// export default function contactsReducer(state = initialState, action) {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state.contacts.length === 0
//         ? { ...state, contacts: contactsData }
//         : state;
//   }
// }
