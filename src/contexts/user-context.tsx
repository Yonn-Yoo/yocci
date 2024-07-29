import React, { createContext, useContext, useEffect, useState } from 'react';
import { onUserStateChange } from '../api/firebase';
import { UserType } from '../types';

export const UserContext = createContext<{
  user: UserType | null;
}>({
  user: null,
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
