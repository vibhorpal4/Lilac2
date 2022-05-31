import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  isAuthCardOpen: false,
  isAuthenticated: false,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    cartAction: (state, action) => {
      state.isCartOpen = action.payload;
    },
    authCardAction: (state, action) => {
      state.isAuthCardOpen = action.payload;
    },
    authAction: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { cartAction, authCardAction, authAction } = globalSlice.actions;

export default globalSlice.reducer;
