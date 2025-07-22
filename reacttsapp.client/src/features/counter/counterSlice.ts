import { createSlice  } from '@reduxjs/toolkit';
import type { AppDispatch } from '../../store/types';
// toolkit has immer
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setZero: (state) => {
      state.value = 0;
    },
  },
})

export const { increment, decrement, incrementByAmount, setZero } = counterSlice.actions
// thunk type ok1
export const incrementAsync = (amount: number): ((dispatch: AppDispatch ) => void) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
};
// thunk ok2
// export const incrementAsync = (amount: number) => (dispatch: ((arg:any) => void)) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export const selectCount = (state: { counter: {value: number} }) => state.counter.value;
export default counterSlice.reducer;