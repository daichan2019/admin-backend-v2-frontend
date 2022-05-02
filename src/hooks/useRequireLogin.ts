import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/globalStates/userState';

export const useRequireLogin = () => {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    user && router.push('/');

    !user && router.push('/login');
  }, [user]);
};
