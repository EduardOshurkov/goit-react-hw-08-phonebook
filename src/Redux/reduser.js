import { ADD_CONTACTS, REMOVE_CONTACTS, SET_FILTER } from "./types";



export const initialStore = {
    items: [],
    filter: '',
}

export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_CONTACTS:
            return { ...store, items: [...store.items, payload]};
        case REMOVE_CONTACTS:
            const newContacts = store.items.filter(({ id }) => id !== payload);
            return { ...store, items: newContacts };
        case SET_FILTER:
            return { ...store, filter: payload }; 
        
        default:
            return store;
    };
};


