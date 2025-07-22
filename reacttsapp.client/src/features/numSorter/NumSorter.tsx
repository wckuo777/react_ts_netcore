// src/features/numberSorter/NumberSorter.tsx
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import {
  setInput,
  toggleDuplicates,
  sortAsc,
  sortDesc,
} from './numSorterSlice';

export default function NumberSorter() {
  const dispatch = useDispatch<AppDispatch>();
  const { rawInput, allowDuplicates, sortedResult } = useSelector(
    (state: RootState) => state.numsorter
  );

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>數字排序 (填寫如 2,7,3,7,5)</h2>
      <input
        type="text"
        placeholder="請輸入數字，使用逗號分隔"
        value={rawInput}
        onChange={(e) => dispatch(setInput(e.target.value))}
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />

      <div style={{ marginTop: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={allowDuplicates}
            onChange={() => dispatch(toggleDuplicates())}
          />{' '}
          允許重複
        </label>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => dispatch(sortAsc())} style={{ marginTop: '10px', backgroundColor:'#538cc5ff' , marginRight: '10px' }}>
          遞增排序
        </button>
        <button onClick={() => dispatch(sortDesc())} style={{ marginTop: '10px', backgroundColor:'#538cc5ff' , marginRight: '10px' }}>遞減排序</button>
      </div>

      {sortedResult.length > 0 && (
        <div style={{ marginTop: '15px', fontWeight: 'bold' }}>
          結果：[{sortedResult.join(', ')}]
        </div>
      )}
    </div>
  );
}
