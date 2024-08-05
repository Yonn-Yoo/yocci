import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  type?: 'text' | 'number';
  id: string;
  label?: string;
  isRequired?: boolean;
}

export default function Input({
  required = false,
  id,
  type = 'text',
  label = id,
  ...props
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-px md:mb-2 text-sm font-medium text-gray-900 capitalize"
      >
        <span className="tracking-wide">{label}</span>
        <span className="ml-1 text-xs">{required && '*'}</span>
      </label>
      <input
        id={id}
        type={type}
        autoComplete="off"
        spellCheck={false}
        className="border border-black text-gray-900 outline-none focus:ring-0 ring-offset-transparent focus:ring-transparent text-sm rounded-sm ring-0 block w-full px-2 py-2.5 md:px-2.5 md:py-3 tracking-wide"
        {...props}
      />
    </div>
  );
}
