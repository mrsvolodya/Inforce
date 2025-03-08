import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./slices/commentsSlice";
import productsReducer from "./slices/productsSlice";
import formReducer from './slices/formSlice'
export const store = configureStore({
  reducer: {
    products: productsReducer,
    comments: commentsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
