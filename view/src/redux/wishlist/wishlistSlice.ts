import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { WLBook, WLState } from "../../types"
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {},
    reducers: {
        addWishlist: (state: WLState, action: PayloadAction<WLBook>) => {
            state[action.payload.id] = action.payload
        },
        removeWishlist: (state: WLState, action: PayloadAction<string>) => {
            delete state[action.payload]
        }
    }
})
export default wishlistSlice

// set up notification slice w its reducers
// call dispatch for notification in sync thunk setup on add/delete wishlist
// render notification state as long as not empty