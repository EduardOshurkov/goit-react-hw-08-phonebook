
import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";


export const addContacts = createAction("contacts/add", (data) => {
    return {
        payload: {
            ...data,
            id: shortid()
        }
    }
});

export const removeContacts = createAction("contacts/remove")
export const setFilter = createAction("filter/set")


