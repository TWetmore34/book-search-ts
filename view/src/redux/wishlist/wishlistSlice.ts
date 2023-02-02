import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { WLBook, WLState } from "../../types"
import { getWlByUser, postWlByUser } from "../api/API";
export const wlFetch = createAsyncThunk("wishlist/fetch", async () => {
    const data: any = await getWlByUser()
    console.log(data)
    return data
})
export const wlPost = createAsyncThunk("wishlist/add", async (book: WLBook) => {
    const data: any = await postWlByUser(book)
    console.log(data)
    if(data.code === "ER_DUP_ENTRY") {
        return false
    }
    if(data) {
        return book
    }
    return new Error("Wishlist update failed")
})
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        loading: false,
        notifications: [],
        list: [],
        err: null
    } as any,
    reducers: {
        addWishlist: (state: WLState, action: PayloadAction<WLBook>) => {
            state[action.payload.id] = action.payload
        },
        removeWishlist: (state: WLState, action: PayloadAction<string>) => {
            delete state[action.payload]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(wlFetch.pending, (state) => {
            state.loading = true
        })
        builder.addCase(wlFetch.rejected, (state, action) => {
            state.err = action.payload
        })
        builder.addCase(wlFetch.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
        })
        builder.addCase(wlPost.fulfilled, (state, action: PayloadAction<any>) => {
            if(action.payload === false) return
            state.notifications.push(action.payload)
            setTimeout(() => {
                state.notifications.unshift()
            },5000)
        })
        builder.addCase(wlPost.rejected, (state, action) => {
            state.err = action.payload
        })
    }
})
export default wishlistSlice

// set up notification slice w its reducers
// call dispatch for notification in sync thunk setup on add/delete wishlist
// render notification state as long as not empty