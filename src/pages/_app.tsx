import '../styles/index.css';

import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Suspense>
  );
};

export default MyApp;
