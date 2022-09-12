import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
import { fetchContacts } from "./contacts-operations";



const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [fetchContacts.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        }
    },
    reducers: {
        addContact: {
            reducer: (store, { payload }) => {
            store.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: shortid()
                    }
              }
          }  
        },
        removeContact: (store, { payload }) => store.filter(item => item.id !== payload)
    }
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;