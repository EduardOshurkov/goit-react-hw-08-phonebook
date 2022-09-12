import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "services/api";


export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkAPI) => {
        try {
            const data = await getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)