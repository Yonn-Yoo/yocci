import React, { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange } from '../api/firebase';
import { UserType } from '../types';

export const AuthContext = createContext<{
  user: UserType | null;
}>({
  user: null,
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
