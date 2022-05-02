import type { FC } from 'react';

import { login } from '@/globalStates/userState';

export const Login: FC = () => {
  return (
    <>
      <h2>Login Page</h2>
      <button
        onClick={() => {
          return login();
        }}
      >
        Google Login
      </button>
    </>
  );
};
