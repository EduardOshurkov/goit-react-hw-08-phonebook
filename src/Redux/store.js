import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import filterReducer from "./filterSlice";
import authReduser from "./auth/auth-slice"


export const store = configureStore({
  reducer: {
    auth: authReduser,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});









