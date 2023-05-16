import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

// Define the initial state for the slice
const initialState: CounterState = {
  count: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

// Extract the reducer function from the slice
export const counterReducer = counterSlice.reducer;

// Extract action creators from the slice
export const { increment, decrement } = counterSlice.actions;
