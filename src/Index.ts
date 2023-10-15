import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./MySlice";
export const Store = configureStore({
  reducer: {
    count: countSlice,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
