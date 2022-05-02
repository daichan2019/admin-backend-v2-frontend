import type { FC } from 'react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import { Button } from '@/components/Button';
import { useAuth } from '@/globalStates/userState';

export const Top: FC = () => {
  const user = useAuth();
  console.log(user);

  return (
    <div>
      <h1>top page!</h1>
      <Suspense fallback={<div>loading</div>}>
        <pre>{user ? `${user.name}でログインしています` : 'ログインしていません'}</pre>
      </Suspense>
      <Button />
    </div>
  );
};
