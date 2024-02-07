import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    createTodo: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.data = state.data.map((data) => (data.id == action.payload.id ? action.payload : data));
    },
    toggleTodo: (state, action) => {
      state.data.find((data) => data.id === action.payload && (data.completed = !data.completed));
    },
  },
});
export const { createTodo, deleteTodo, editTodo, toggleTodo } = todosSlice.actions;
export default todosSlice;
