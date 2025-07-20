// src/features/pangram/PangramChecker.tsx
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';
import { setText, checkPangram } from './pangramSlice';

export default function PangramChecker() {
  const dispatch = useDispatch<AppDispatch>();
  const text = useSelector((state: RootState) => state.pangram.text);
  const result = useSelector((state: RootState) => state.pangram.result);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>Pangram 檢查器 (Redux)</h2>
      <p>請輸入英文句子，例如：The quick brown fox jumps over the lazy dog</p>
      <textarea
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
        rows={4}
        style={{ width: '100%', fontSize: '16px' }}
        placeholder="請輸入英文句子，例如：The quick brown fox jumps over the lazy dog"
      />
      <br />
      <button onClick={() => dispatch(checkPangram())} style={{ marginTop: '10px', backgroundColor:'#538cc5ff' }}>
        檢測
      </button>
      {result && (
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{result}</p>
      )}
    </div>
  );
}
