import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    createTodo: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.data = state.data.map((data) => (data.id == action.payload.id ? action.payload : data));
    },
  },
});
export const { createTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice;
