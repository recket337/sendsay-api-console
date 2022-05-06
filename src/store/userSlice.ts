import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

type userState = {
    isAuthenticated: boolean;
    session: any;
}

const initialState: userState = {
    isAuthenticated: false,
    session: '',
}

// export const loginSuccess = createAsyncThunk(
//     'user/loginSuccess',
//     async function() {
//         const 
//     }
// )

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