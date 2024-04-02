import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../app/feature/counter/counterSlice'
import authReducer from '../reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
})