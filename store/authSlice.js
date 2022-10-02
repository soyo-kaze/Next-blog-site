import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  user: {},
};

// Actual Slice
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthState : (state, action) => {

    if(action.payload.type === "USER_LOGIN"){
        state.user = action.payload.user
    }else{
        state.user = {}
    }

    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const userState = (state) => state.user;

export default authSlice.reducer;
