import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'; 
import pangramReducer from '../features/pangram/pangramSlice'; 
import numSorterReducer from '../features/numSorter/numSorterSlice'; 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pangram: pangramReducer,
    numsorter: numSorterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
