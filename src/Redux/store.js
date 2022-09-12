import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  filterReducer  from "./filterSlice";
import contactsReducer from "./contactSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";



const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist:['contacts']
};

const persistedReduser = persistReducer(contactsPersistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReduser
});


export const persistore = persistStore(store);






