import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: { 
    value: 0 
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = gameSlice.actions;
export default gameSlice.reducer;