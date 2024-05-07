'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  loading: () => <h2>Map is loading...</h2>,
  ssr: false,
});

export default Map;
