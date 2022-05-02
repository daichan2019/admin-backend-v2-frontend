import axios from 'axios';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { atom, useRecoilValue } from 'recoil';

import { app } from '@/lib/firebase';

const auth = getAuth(app);

type UserState = {
  accessToken: string;
  uid: string;
  email: string;
  displayName: string;
};

const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
  effects: [
    ({ setSelf }) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const token = user.accessToken;

          const fetchUserByAPI = async () => {
            const res = await axios.post('http://localhost:3000/api/v1/auth/users', {
              token,
            });

            const { id, name, uid } = res.data;

            const userState = {
              id,
              name,
              uid,
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

// e: atomの値をサブスクライブするフック
export const useAuth = () => {
  return useRecoilValue(userState);
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
