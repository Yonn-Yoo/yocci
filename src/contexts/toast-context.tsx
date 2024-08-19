import React, { createContext, useContext, useState } from 'react';
import Toast from '../components/common/Toast';
import { ToastType } from '../types';

export const ToastContext = createContext<{
  createToast: (toast: ToastType) => void;
  deleteToast: (id: string) => void;
}>({
  createToast: () => {},
  deleteToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const createToast = (toast: ToastType) => {
    setToasts((prev) => [...prev, toast]);
  };

  const deleteToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ createToast, deleteToast }}>
      <ul className="max-md:w-full md:max-w-[300px] md:w-full max-md:px-5 fixed max-md:bottom-5 right-1/2 max-md:translate-x-1/2 md:top-20 md:right-4 z-30 flex flex-col space-y-3">
        {toasts.map(({ text, type, id }) => (
          <Toast key={id} text={text} type={type} id={id} />
        ))}
      </ul>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
