import { createSlice } from "@reduxjs/toolkit";

export type Action = {
  request: string;
  isSuccessful: boolean;
}

type userState = {
    actionsHistory: Action[];
};

const initialState: userState = {
    actionsHistory: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    saveAction(state, action) {
      console.log(action.payload)
      state.actionsHistory.push(action.payload)
    },
    deleteAction(state, action) {
     state.actionsHistory = state.actionsHistory.filter(i => i != action.payload)
    },
    setHistory(state, action) {
      state.actionsHistory = action.payload
    },
    clearHistory(state) {
      state.actionsHistory = []
    },
  },
});

export const { saveAction, deleteAction, setHistory, clearHistory } =
  historySlice.actions;

export default historySlice.reducer;
