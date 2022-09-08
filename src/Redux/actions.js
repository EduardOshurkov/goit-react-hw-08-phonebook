import { ADD_CONTACTS, REMOVE_CONTACTS, SET_FILTER } from "./types";
import shortid from "shortid";


export const addContacts = (payload) => {
    return {
        type: ADD_CONTACTS,
        payload: {
            id: shortid(),
            name: [payload],
            number: '',
        },
    }
};

export const removeContacts = (payload) => {
    return {
        type: REMOVE_CONTACTS,
        payload,
    }
}

export const setFilter = (payload) => {
    return {
        type: SET_FILTER,
        payload,
    }
}