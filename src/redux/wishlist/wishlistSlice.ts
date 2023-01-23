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
            console.log(state[action.payload], action.payload)
            delete state[action.payload]
        }
    }
})
export default wishlistSlice