import clsx from 'clsx';
import { useState } from 'react';
import { useToast } from '../../contexts/toast-context';
import { ToastType } from '../../types';
import ToastCloseIcon from '../svg/icon/ToastCloseIcon';
import ToastFailIcon from '../svg/icon/ToastFailIcon';
import ToastSuccessIcon from '../svg/icon/ToastSuccessIcon';

export default function Toast({ text, type = 'success', id }: ToastType) {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteToast } = useToast();

  return (
    <li
      onAnimationStart={() => setIsOpen(true)}
      onAnimationEnd={() => setIsOpen(false)}
      onTransitionEnd={() => {
        if (isOpen) return;
        deleteToast(id);
      }}
      className={`${
        isOpen
          ? 'opacity-100 max-md:translate-y-0 md:translate-x-0'
          : 'opacity-0 max-md:translate-y-full md:translate-x-full'
      } relative duration-300 ease-out flex items-center md:max-w-xl w-full p-4 text-gray-500 bg-white rounded-md shadow-xl overflow-hidden`}
    >
      <div
        className={clsx(
          'absolute bottom-0 left-0 w-full h-0.5 animate-toastBar',
          {
            'bg-green-500': type === 'success',
            'bg-red-500': type === 'fail',
            'bg-orange-500': type === 'warning',
          }
        )}
      />
      <div
        className={clsx(
          'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-md',
          {
            'text-green-500 bg-green-100': type === 'success',
            'text-red-500 bg-red-100': type === 'fail',
            'text-orange-500 bg-orange-100': type === 'warning',
          }
        )}
      >
        {type === 'success' && <ToastSuccessIcon />}
        {(type === 'fail' || type === 'warning') && <ToastFailIcon />}
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button
        onClick={() => setIsOpen(false)}
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-md focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 "
      >
        <ToastCloseIcon />
      </button>
    </li>
  );
}
