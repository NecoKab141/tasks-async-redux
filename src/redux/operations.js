import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://69b69814583f543fbd9e13e6.mockapi.io/";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
try {
    const response = await axios.get("/tasks");
    console.log(response.data);
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message)
  }
  }
) 
