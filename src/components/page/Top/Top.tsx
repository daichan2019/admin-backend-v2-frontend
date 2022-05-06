import type { FC } from 'react';

import { Header } from '@/components/Header';

export const Top: FC = () => {
  return (
    <>
      <Header />
      <h1>top page!</h1>
      <h2>記事一覧</h2>
    </>
  );
};
