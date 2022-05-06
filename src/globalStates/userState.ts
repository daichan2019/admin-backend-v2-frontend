import axios from 'axios';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { atom, useRecoilValue } from 'recoil';

import { app } from '@/lib/firebase';

type UserState = {
  id: number;
  uid: string;
  email: string;
  name: string;
};

const auth = getAuth(app);

const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
  effects: [
    ({ setSelf }) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const token = await auth.currentUser?.getIdToken();
          console.log(token);

          const fetchUserByAPI = async () => {
            const res = await axios.post('http://localhost:3000/api/v1/auth/users', {
              token,
            });

            const { email, id, name, uid } = res.data;

            const userState = {
              id,
              name,
              uid,
              email,
            };

            setSelf(userState);
          };

          fetchUserByAPI();
        } else {
          setSelf(null);
        }
      });

      return () => {
        unsubscribe();
      };
    },
  ],
});

export const useAuth = () => {
  return useRecoilValue(userState);
};

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

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  return signInWithRedirect(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};
