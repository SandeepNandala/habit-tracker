import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/habitSlice'

// defining the store and exporting
const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;