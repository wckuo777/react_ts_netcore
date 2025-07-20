import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  setZero,
  selectCount,
} from './counterSlice';
 import type { AppDispatch } from '../../store/store';

export default function Counter() {
  const count = useSelector((state: RootState) => selectCount(state));
 // 預先型別
const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())} className="mybtn">+1</button>
      <button onClick={() => dispatch(decrement())} className="mybtn">-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))} className="mybtn">+5</button>
      <button onClick={() => dispatch(incrementAsync(10))} className="mybtn">Async +10</button>
      <button onClick={() => dispatch(setZero())} className="mybtn">zero</button>
    </div>
  );
}
