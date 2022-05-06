import { configureStore } from "@reduxjs/toolkit";
import consoleSlice from "./consoleSlice";
import consoleReducer from './consoleSlice';
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        console: consoleReducer,
        user: userReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState> 

export type AppDispatch = typeof store.dispatch;