import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleCompleted, setStatusFilter, statusFilters } from "./actions";

const tasksInitialState = [];

export const tasksReducer = createReducer(tasksInitialState, builder => {
    builder
        .addCase(addTask, (state, action) => {
            state.push(action.payload);
        })
        .addCase(deleteTask, (state, action) => {
            const index = state.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        })
        .addCase(toggleCompleted, (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.completed = !task.completed;
            }
        });
});

const filtersInitialState = { status: statusFilters.all };

export const filtersReducer = createReducer(filtersInitialState, builder => {
    builder.addCase(setStatusFilter, (state, action) => {
        state.status = action.payload;
    });
});

