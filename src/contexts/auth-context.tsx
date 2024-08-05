import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import { UserType } from '../types';
import { createUuid } from '../utils/utils';
import { useToast } from './toast-context';

export const AuthContext = createContext<{
  user: UserType | null;
  uid: string | null;
  handleLogout: () => void;
  handleLogin: () => void;
}>({
  user: null,
  uid: '',
  handleLogout: () => {},
  handleLogin: () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { createToast } = useToast();
  const [user, setUser] = useState<UserType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  const handleLogout = () => {
    logout().then(() => {
      createToast({
        text: 'Signed out successfully',
        id: createUuid(),
      });
      navigate('/');
    });
  };

  const handleLogin = () => {
    login().then(handleLoginSuccess).catch(handleLoginFail);

    function handleLoginSuccess() {
      createToast({
        text: 'Signed in successfully',
        id: createUuid(),
      });
      navigate('/');
    }

    function handleLoginFail({
      code,
      message,
    }: {
      code: string;
      message: string;
    }) {
      console.error(`${code}: ${message}`);
      createToast({
        type: 'fail',
        text: message,
        id: createUuid(),
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, handleLogout, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
