// src/store/data/actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dataAPI } from "../../api/dataAPI"

// Create an async action (Thunk) to fetch data
export const fetchData = createAsyncThunk(
  'data/fetchData', // Action type
  async (_, { dispatch, rejectWithValue }) => {
    try {

      console.log(dataAPI);

      const response = dispatch(dataAPI.endpoints.fetchData.initiate());

      if (response.error) {
        throw new Error(response.error.message);
      }

      return response.data; // Return the data
    } catch (error) {
      console.error("Fetching data: ", error) // Handle errors
      throw error
    }
  }
);
