import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { changeMode } = dashboardSlice.actions;
export default dashboardSlice.reducer;

