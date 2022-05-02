import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect } from 'react';

import { logout, useAuth } from '@/globalStates/userState';

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
