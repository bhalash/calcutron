import React, { lazy, Suspense } from 'react';

const LazyCounter = lazy(() => import('./counter'));

const Counter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCounter {...props} />
  </Suspense>
);

export default Counter;
