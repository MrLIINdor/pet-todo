import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const drawSlice = createSlice({
  name: 'draw',
  initialState: initialState,
  reducers: {
    saveDraw: (state, action) => {
      state.data = action.payload;
    },
    clearDraw: (state, action) => {
      state.data = [];
    },
  },
});
export const { saveDraw, clearDraw } = drawSlice.actions;
export default drawSlice;
