import { combineReducers } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlist/wishlistSlice";
import bookSlice from "./books/bookSlice";
import notificationSlice from "./notifications/notificationSlice";
import userSlice from "./user/userSlice";
const rootReducer = combineReducers({
    wishlist: wishlistSlice.reducer, 
    books: bookSlice.reducer,
    notifs: notificationSlice.reducer,
    user: userSlice.reducer
})
export default rootReducer