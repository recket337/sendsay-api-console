import { configureStore } from "@reduxjs/toolkit";
import consoleReducer from './consoleSlice';
import userReducer from './userSlice'
import historyReducer from './historySlice'

const store = configureStore({
    reducer: {
        console: consoleReducer,
        user: userReducer,
        history: historyReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState> 

export type AppDispatch = typeof store.dispatch;