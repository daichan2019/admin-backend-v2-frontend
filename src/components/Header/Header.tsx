import Link from 'next/link';
import type { FC } from 'react';

import { useAuth } from '@/globalStates/userState';

export const Header: FC = () => {
  const user = useAuth();
  return (
    <header>
      <div className='flex content-between items-center h-12'>
        <h1>管理画面</h1>
        <nav>
          {user ? (
            <div>{user.name}</div>
          ) : (
            <Link href='/login'>
              <a>ログイン</a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
