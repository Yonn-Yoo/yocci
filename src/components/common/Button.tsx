import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonTypeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'close';
  additionalClass?: string;
}

export default function Button({
  children,
  buttonType = 'primary',
  additionalClass,
  ...props
}: ButtonTypeProps) {
  return (
    <button
      className={clsx('relative z-[1] py-4 px-7 text-xs md:text-sm group', {
        'text-white': buttonType === 'primary' || buttonType === 'tertiary',
        'text-black': buttonType === 'secondary',
        'p-0': buttonType === 'close',
      })}
      {...props}
    >
      <div
        className={clsx(
          'absolute left-0 top-0 w-full h-full border -z-[1] group-hover:scale-90 duration-500 ease-in-out',
          {
            'bg-black border-black': buttonType === 'primary',
            'bg-white border-black': buttonType === 'secondary',
            'backdrop-blur-lg border-white': buttonType === 'tertiary',
            'bg-black border-black rounded-full ': buttonType === 'close',
            'bg-gray-300 border-gray-300 group-hover:!scale-100 cursor-not-allowed':
              props.disabled,
          }
        )}
      />
      {children}
    </button>
  );
}
