import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import bookSlice from "../../redux/books/bookSlice"
import wishlistSlice from "../../redux/wishlist/wishlistSlice"
import notificationSlice from "../../redux/notifications/notificationSlice"
let renderWProvider  = (Component: () => JSX.Element, preloadedState?: any ): {Ui :() => JSX.Element} => {
    const ProvidedComponent = () => {
        return (
        <Provider store={configureStore({reducer: {
            books: bookSlice.reducer,
            wishlist: wishlistSlice.reducer,
            notifs: notificationSlice.reducer
        },
        preloadedState
        })}>
            <Component />
        </Provider>
        )}
        const returnVal = {Ui: ProvidedComponent}
        return returnVal
}

export default renderWProvider