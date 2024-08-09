import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUsers = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://localhost:3005/users', {
        name:faker.name.fullName()
    })
    await pause();
    return response.data;
});

const pause =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

export {addUsers}