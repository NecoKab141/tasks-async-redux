import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";

const tasksInitialState = { items: [], isLoading: false, error: null };

const tasksSlice = createSlice({
  name: "tasks",

  initialState: tasksInitialState,

  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    toggleCompleted(state, action) {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = 0;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

const filtersInitialState = { status: true }

const filterSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
