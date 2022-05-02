import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/globalStates/userState';

export const useRequireLogin = () => {
  const user = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [user]);
};
