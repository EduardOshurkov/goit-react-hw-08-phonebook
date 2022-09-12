import axios from "axios";


const instance = axios.create({
    baseURL: "https://631f2c5522cefb1edc44c4a6.mockapi.io/api/contacts",
});

export const getContacts = async () => {
    const { data } = await instance.get("/");
    return data
};

export const addContacts = async (data) => {
    const { data: result } = await instance.post("/", data);
    return result;
}

export const removeBook = async (id) => {
    const { data: result } = await instance.delete(`/${id}`);
    return result;
}