import { ChangeEvent } from 'react';

type InputProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
};

export default function Input({
  name,
  value,
  label = name,
  placeholder = '',
  onChange,
  isRequired = true,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-px md:mb-2 text-sm font-medium text-gray-900 capitalize"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="border border-black text-gray-900 outline-none focus:ring-0 ring-offset-transparent focus:ring-transparent text-sm rounded-sm ring-0 block w-full px-2 py-2.5 md:px-2.5 md:py-3"
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
}
