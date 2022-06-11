import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/items/items-slice";

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
