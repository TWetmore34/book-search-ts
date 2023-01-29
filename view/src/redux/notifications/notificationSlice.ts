import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { WLBook } from "../../types"
const notifCycle = createAsyncThunk("notifs/cycle", (book: WLBook) => {
    return new Promise((res, rej) => {
    })
})
const notificationSlice = createSlice({
    name: "notification",
    initialState: [],
    reducers: {
        // middleware calls these with addNotif then setTimeout(()=>removeNotif)
        addNotif: (state: WLBook[], action: PayloadAction<WLBook>)=> {
            state.push(action.payload)
        },
        removeNotif: (state: WLBook[]) => {
            state.shift();
        }
    }
})

export default notificationSlice