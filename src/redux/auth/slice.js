import { createSlice } from "@reduxjs/toolkit"
import { logIn, logOut, refreshUser, register } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;

            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(logIn.pending, (state) => {
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(logOut.pending, (state) => {
                state.error = null;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = {
                    name: null,
                    email: null
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                state.error = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;