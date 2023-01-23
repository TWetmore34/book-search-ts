import { combineReducers } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlist/wishlistSlice";
import bookSlice from "./books/bookSlice";
import notificationSlice from "./notifications/notificationSlice";
const rootReducer = combineReducers({
    wishlist: wishlistSlice.reducer, 
    books: bookSlice.reducer,
    notifs: notificationSlice.reducer
})
export default rootReducer