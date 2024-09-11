import { createAction } from "@reduxjs/toolkit";

export const deleteContact = createAction("contacts/deleteContact");
export const addContact = createAction("contacts/addContact");
export const setFilter = createAction("contacts/setFilter");
