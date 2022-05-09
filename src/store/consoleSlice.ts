import { createSlice } from "@reduxjs/toolkit";

type userState = {
  request: string;
  response: string;
  isFetching: boolean;
  error: { req: boolean; res: boolean };
  execute: boolean;
};

const initialState: userState = {
  request: "",
  response: "",
  isFetching: false,
  error: { req: false, res: false },
  execute: false,
};

const consoleSlice = createSlice({
  name: "console",
  initialState,
  reducers: {
    setRequest(state, action) {
      state.request = action.payload;
    },
    setResponse(state, action) {
      state.response = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
    setError(state, action) {
      state.error = action.payload.error;
    },
    setExecute(state, action) {
      state.execute = action.payload;
    }
  },
});

export const { setRequest, setResponse, setIsFetching, setError, setExecute } =
  consoleSlice.actions;

export default consoleSlice.reducer;
