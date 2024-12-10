// src/store/data/slice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './actions'; // Import the async action

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.isError;
      });
  },
});

export default dataSlice.reducer;
