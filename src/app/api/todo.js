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
    deleteTodo: (state, { action: { todoId } }) => {
      state.data = state.data.filter((data) => data.id !== todoId);
    },
    editTodo: (state, { action: editTodo }) => {
      state.data = state.data.map((data) => (data.id == editTodo.id ? editTodo : data));
    },
  },
});
export const { createTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice;
