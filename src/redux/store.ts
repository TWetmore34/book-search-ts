import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducer"
const store = configureStore({
    reducer: rootReducer
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
store.subscribe(() => console.log(store.getState()))
export default store