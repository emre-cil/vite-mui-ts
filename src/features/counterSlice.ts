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

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const incrementAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment(amount));
  }, 1000);
};

// Extract the reducer function from the slice
export const counterReducer = counterSlice.reducer;

export const selectCount = (state: any) => state.counter.count;

// Extract action creators from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
