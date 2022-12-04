import { useEffect, useState } from 'react';
import styles from './Counter.module.scss';

export interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 0 }: CounterProps = {}) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(`[Counter] count ${count}`);
  }, [count]);

  return (
    <>
      <h3>{count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Add!</button>
        <button onClick={() => setCount(count - 1)}>Subtract!</button>
      </div>
    </>
  );
};

export default Counter;
