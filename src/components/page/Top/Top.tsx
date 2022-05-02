import type { FC } from 'react';

import { useAuth } from '@/globalStates/userState';

export const Top: FC = () => {
  const user = useAuth();

  return (
    <div>
      <h1>top page!</h1>
      <pre>{user ? `${user.name}でログインしています` : 'ログインしていません'}</pre>
    </div>
  );
};
