import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./reduser";

const store = configureStore({
    reducer: {
        contact: contactsReducer,
        filter: filterReducer,
    }
});

export default store;




