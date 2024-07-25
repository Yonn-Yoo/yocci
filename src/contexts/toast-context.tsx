import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../components/common/Toast';
import { ToastType } from '../types';

export const ToastContext = createContext<{
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}>({
  setToasts: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([
    { isOpen: true, text: 'successfully done', type: 'success', id: 'asdf' },
    { isOpen: true, text: 'failed', type: 'fail', id: 'zxcv' },
    { isOpen: true, text: 'change your password', type: 'warning', id: 'qwer' },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setToasts((prev) => [
        ...prev,
        {
          isOpen: true,
          text: 'change your password',
          type: 'warning',
          id: 'qwer',
        },
      ]);
    }, 1000);
  }, []);

  return (
    <ToastContext.Provider value={{ setToasts }}>
      <ul className="fixed top-10 right-10 z-20 flex flex-col space-y-3">
        {toasts.map(({ isOpen, text, type, id }) => (
          <Toast
            key={id}
            isOpen={isOpen}
            text={text}
            toastType={type}
            id={id}
          />
        ))}
      </ul>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
