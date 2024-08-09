import { userReducer } from "./slices/usersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUsers } from "./thunks/addUsers";
const store = configureStore({
    reducer: {
        users: userReducer,
    },
});


export { store, fetchUsers, addUsers }