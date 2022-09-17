import axios from "axios";


const instance = axios.create({
    baseURL: "https://631f2c5522cefb1edc44c4a6.mockapi.io/api/contacts",
});

export const getContacts = async () => {
    const { data } = await instance.get("/");
    return data
};

export const addContacts = async options => {
    const { data} = await instance.post("/", options);
    return data;
}

export const removeContacts = async (id) => {
    const { data } = await instance.delete(`/${id}`);
    return data;
}