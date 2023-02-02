import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { loginAPI, signupAPI } from "../api/API";

export const login = createAsyncThunk("users/login", async (user: IUser) => {
    let data = await loginAPI(user);
    return data as any
})

export const signUp = createAsyncThunk("users/create",async (newUser:IUser) => {
    try {
        let data = await signupAPI(newUser)
        return data as any
    } catch (err) {
        console.log(err)
        return err
    }
})

const userSlice =  createSlice({
    name: "user",
    initialState: {
        token: null,
        err: null
    } as any,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            state.token = action.payload.token;
            console.log(state.token)
        })
        builder.addCase(login.rejected, (state, action) => {
            state.token = null
            state.err = action.payload
            console.log(state.token)
        })
        builder.addCase(signUp.fulfilled, (state, action: PayloadAction<any>) => {
            state.token = action.payload.token
        })
        builder.addCase(signUp.rejected, (state, action) => {
            state.token = null
            state.err = action.payload
            console.log(state.err)
        })
    }
})
export default userSlice