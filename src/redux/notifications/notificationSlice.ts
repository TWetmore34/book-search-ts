import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { WLBook } from "../../types"
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