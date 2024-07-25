import clsx from 'clsx';
import { useEffect } from 'react';
import { useToast } from '../../contexts/toast-context';
import { ToastType } from '../../types';
import ToastCloseIcon from '../svg/icon/ToastCloseIcon';
import ToastSuccessIcon from '../svg/icon/ToastSuccessIcon';

interface DivTypeProps {
  isOpen: boolean;
  text: string;
  toastType?: ToastType['type'];
  id: string;
}

export default function Toast({
  isOpen,
  text,
  toastType = 'success',
  id,
}: DivTypeProps) {
  const { setToasts } = useToast();

  useEffect(() => {
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 10000);
  }, [setToasts, id]);

  return (
    <li
      className={`${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'
      } duration-500 ease-out flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-xl`}
    >
      <div
        className={clsx(
          'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg',
          {
            'text-green-500 bg-green-100': toastType === 'success',
            'text-red-500 bg-red-100': toastType === 'fail',
            'text-orange-500 bg-orange-100': toastType === 'warning',
          }
        )}
      >
        <ToastSuccessIcon />
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 ">
        <ToastCloseIcon />
      </button>
    </li>
  );
}
