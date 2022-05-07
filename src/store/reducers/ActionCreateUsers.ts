import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api/Api";

export const getUserData = createAsyncThunk(
    'users/users',
    async (_, thunkAPI) => {
        try {
            const responce = await getUsers.getTenUsers()
            return responce
        } catch (error) {
            thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)