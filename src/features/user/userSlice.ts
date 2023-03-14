import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
const initialState = {
  token: null,
  user: null,
  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
        localStorage.setItem('mode', 'dark');
      } else {
        state.mode = 'light';
        localStorage.setItem('mode', 'light');
      }
    },
  },
});

export const { setCredentials, setToken, changeMode } = userSlice.actions;

export const selectToken = (state: RootState) => state.user.token;

export const selectUser = (state: RootState) => state.user.user;

export const selectMode = (state: RootState) => state.user.mode;

export default userSlice.reducer;
