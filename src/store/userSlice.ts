import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

type userState = {
    isAuthenticated: boolean;
    session: string | null;
}

const initialState: userState = {
    isAuthenticated: false,
    session: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
        setSession(state, action: PayloadAction<any>) {
            state.session = action.payload;
        }
    }
})

export const {setSession, setAuthenticated} = userSlice.actions;

export default userSlice.reducer;   