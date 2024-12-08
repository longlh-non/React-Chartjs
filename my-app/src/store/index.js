// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import { baseAPI } from '../api/baseAPI';
import { dataAPI } from '../api/dataAPI';
import dataReducer from './data/slice';  

// Create the Redux store
const store = configureStore({
  reducer: {
    // the RTK Query reducer
    [baseAPI.reducerPath]: baseAPI.reducer,
    [dataAPI.reducerPath]: dataAPI.reducer, // Make sure the reducer for dataAPI is added here

    // Other reducers 
    data: dataReducer, // Your slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware), // Add RTK Query middleware
});

export default store;

