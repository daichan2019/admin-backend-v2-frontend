import type { FC } from 'react';

import { logout } from '@/globalStates/userState';

export const Logout: FC = () => {
  return (
    <>
      <h2>Logout Page</h2>
      <button
        onClick={() => {
          return logout();
        }}
      >
        logout
      </button>
    </>
  );
};
