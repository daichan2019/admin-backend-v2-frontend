import Link from 'next/link';
import type { FC } from 'react';

import { useRequireLogin } from '@/globalStates/userState';

export const About: FC = () => {
  const title = 'アバウト';
  useRequireLogin();

  return (
    <>
      <title>{title}</title>
      <div>about page!</div>
      <Link href='/'>
        <a>TOPへ戻る</a>
      </Link>
    </>
  );
};
