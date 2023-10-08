import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../api/todo';

export default configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
