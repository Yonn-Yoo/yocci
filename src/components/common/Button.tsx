import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonTypeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

export default function Button({
  children,
  buttonType = 'primary',
  ...props
}: ButtonTypeProps) {
  return (
    <button
      className={clsx('relative p-4 text-xs group', {
        'text-white': buttonType === 'primary' || buttonType === 'tertiary',
        'text-black': buttonType === 'secondary',
        'bg-gradient-to-r from-primary to-primaryTo hover:from-hoverPrimary hover:to-hoverPrimaryTo text-white max-md:!w-full max-md:max-w-full !w-[180px] !h-[80px] max-2xl:!w-[160px] max-2xl:!h-[60px]':
          props.disabled,
      })}
      {...props}
    >
      <div
        className={clsx(
          'absolute left-0 top-0 w-full h-full border -z-[1] group-hover:scale-95 duration-500 ease-in-out',
          {
            'bg-black border-black': buttonType === 'primary',
            'bg-white border-black': buttonType === 'secondary',
            'backdrop-blur-sm border-white': buttonType === 'tertiary',
            'bg-gradient-to-r from-primary to-primaryTo hover:from-hoverPrimary hover:to-hoverPrimaryTo text-white max-md:!w-full max-md:max-w-full !w-[180px] !h-[80px] max-2xl:!w-[160px] max-2xl:!h-[60px]':
              props.disabled,
          }
        )}
      />
      {children}
    </button>
  );
}
