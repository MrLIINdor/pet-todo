import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toast: null,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    createNotification: (state, action) => {
      state.toast = action.payload;
    },
  },
});
export const { createNotification } = notificationsSlice.actions;
export default notificationsSlice;
