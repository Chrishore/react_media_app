import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUsers } from "../thunks/addUsers";
const userSlice = createSlice({
    name: "users",
    initialState: {
        userList: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state) => {
            console.log("Pending", state);
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("Fulfilled", state, action);
            state.isLoading = false;
            state.userList = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("Rejected", state, action);
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(addUsers.pending, (state, action) => {
            console.log("Pending", state, action);
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addUsers.fulfilled, (state, action) => {
            console.log("Fulfilled", state, action);
            state.isLoading = false;
            state.userList.push(action.payload);
        });
        builder.addCase(addUsers.rejected, (state, action) => {
            console.log("Rejected", state, action);
            state.isLoading = false;
            state.error = action.error.message;
        });

    }
});

export const userReducer = userSlice.reducer;
