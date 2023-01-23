import { combineReducers } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlist/wishlistSlice";
import bookSlice from "./books/bookSlice";
const rootReducer = combineReducers({
    wishlist: wishlistSlice.reducer, 
    books: bookSlice.reducer,
})
export default rootReducer