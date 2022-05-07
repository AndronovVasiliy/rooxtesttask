import axios from "axios";
import { User } from "../store/reducers/userReducer";

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getUsers = {
    getTenUsers(){
        return instance.get<Array<User>>('users').then(res => res.data)
    }
}