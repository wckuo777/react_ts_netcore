import { useEffect, useRef, useState } from 'react';

export default function FibonacciCalculator() {
  const [n, setN] = useState(1);
  const methods = ['遞迴Func', '迴圈方式', '遞迴記憶'];
  type MethodType = typeof methods[number];
  const [method, setMethod] = useState<MethodType>('遞迴Func');
  const [result, setResult] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const MAX_N = 30;

  const fibRecursive = (num: number): number => {
    if (num <= 1) return num;
    return fibRecursive(num - 1) + fibRecursive(num - 2);
  };

  const fibIterative = (num: number): number => {
    if (num <= 1) return num;
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };

  const fibMemoized = (() => {
    const memo: Record<number, number> = {};
    const fib = (num: number): number => {
      if (num in memo) return memo[num];
      if (num <= 1) return num;
      return (memo[num] = fib(num - 1) + fib(num - 2));
    };
    return fib;
  })();

  const calculate = () => {
    if (n < 1 || n > MAX_N) {
      alert(`請輸入 1 到 ${MAX_N} 的數字`);
      return;
    }
    const start = performance.now();
    let value;
    switch (method) {
      case '遞迴Func':
        value = fibRecursive(n - 1);
        break;
      case '迴圈方式':
        value = fibIterative(n - 1);
        break;
      case '遞迴記憶':
        value = fibMemoized(n - 1);
        break;
    }
    const end = performance.now();
    setResult(value as number);
    setTime(end - start);
  };

  // 👇 
  useEffect(() => {
    if (result !== null && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>費波那契計算器</h2>
      <p>0,1,1,2,3,5,8,13,21,34,55,89,144,...</p>
      <p>請輸入數字N將費波那契數計算第 N 個值, max:{MAX_N}</p>
      <input
        type="number"
        min="1"
        max={MAX_N}
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="method">計算方式：</label>
        <select id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value as MethodType)}
        >
          {methods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <button onClick={calculate} style={{ marginTop: '10px', backgroundColor:'#538cc5ff' , marginRight: '10px' }} >
        計算
      </button>

      {result !== null && (
        <div ref={resultRef} style={{ marginTop: '15px' }}>
          <strong>結果：</strong> {result}
          <br />
          <strong>耗時：</strong> {time?.toFixed(2)} ms
        </div>
      )}
    </div>
  );
}
