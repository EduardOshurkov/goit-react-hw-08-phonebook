import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "./filterSlice";
import contactsReducer from "./contactSlice";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});

export default store;




