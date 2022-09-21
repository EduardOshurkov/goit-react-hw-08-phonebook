// import axios from "axios";
import instance from "./auth";




export const getContacts = async () => {
    const { data } = await instance.get("/contacts");
    return data
};

export const addContacts = async options => {
    const { data} = await instance.post("/contacts", options);
    return data;
}

export const removeContacts = async (id) => {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
}