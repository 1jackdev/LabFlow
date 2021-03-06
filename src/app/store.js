import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/taskTracker/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
