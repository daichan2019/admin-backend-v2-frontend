import type { FC } from 'react';

import { login, useRequireLogin } from '@/globalStates/userState';

export const Login: FC = () => {
  useRequireLogin();

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
