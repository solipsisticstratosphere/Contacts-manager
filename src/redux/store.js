import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const persistedContactsReducer = persistReducer(
  {
    key: "contacts",
    storage,
    whitelist: ["contacts"],
  },
  contactsReducer
);
const persistedFilterReducer = persistReducer(
  {
    key: "filter",
    storage,
    whitelist: ["filter"],
  },
  filterReducer
);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// const initialState = {
//   contacts: {
//     items: contactsData,
//   },
//   filter: "",
// };
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload
//           ),
//         },
//       };
//     }
//     case "contacts/setFilter": {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }
//   }
//   return state;
// };
