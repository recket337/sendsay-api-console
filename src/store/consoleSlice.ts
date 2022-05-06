import {createSlice} from '@reduxjs/toolkit'

const consoleSlice = createSlice({
    name: 'console',
    initialState: {
        request: '',
        response: '',
        isFetching: false,
        error: {req: false, res: false}
    },
    reducers: {
        setRequest(state, action) {
            state.request = action.payload.request
        },
        setResponse(state, action) {
            state.response = action.payload.response
        },
        setisFetching(state, action) {
            state.isFetching = action.payload.isFetching
        },
        setError(state, action) {
            state.error = action.payload.error
        }
    }
})

export const  {setRequest, setResponse, setisFetching, setError} = consoleSlice.actions;

export default consoleSlice.reducer;