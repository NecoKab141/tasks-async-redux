import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addTask = createAction("task/addTask", text => ({
    payload: { id: nanoid(), text, completed: false }
}));

export const deleteTask = createAction("task/deleteTask", id => ({
    payload: { id }
}));

export const toggleCompleted = createAction("task/toggleCompleted", id => ({
    payload: { id }
}));

export const setStatusFilter = createAction("task/setStatusFilter", filter => ({
    payload: filter
}));

export const statusFilters = Object.freeze({
    all: "all",
    active: "active",
    completed: "completed"
});