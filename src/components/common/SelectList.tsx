import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';
import ChevronDownIcon from '../svg/icon/ChevronDownIcon';

type Props = {
  options: string[];
  value: string;
  onChange: (value: any) => void;
};

export default function SelectList({ options, value, onChange }: Props) {
  return (
    <div className="mx-auto w-full">
      <span className="block mb-px md:mb-2 text-sm font-medium text-gray-900 capitalize">
        category
      </span>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton className="relative block w-full rounded-sm bg-white border border-black text-black px-2 py-2.5 md:px-2.5 md:py-3 tracking-wide pr-8 pl-3 text-left text-sm focus:outline-none">
          {value}
          <ChevronDownIcon className="group pointer-events-none absolute top-3.5 right-2.5 md:right-3 size-4 fill-white/60" />
        </ListboxButton>
        <ListboxOptions
          anchor={{ to: 'bottom start', gap: '4px' }}
          transition
          className={clsx(
            'w-[var(--button-width)] z-10 rounded-sm border border-black bg-white [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-150 ease-in-out data-[leave]:data-[closed]:opacity-0 data-[enter]:data-[closed]:opacity-0 data-[enter]:data-[opened]:opacity-100'
          )}
        >
          {options.map((option) => (
            <ListboxOption
              key={option}
              value={option}
              className="group duration-150 ease-out flex data-[selected]:cursor-default data-[selected]:bg-black/10 data-[selected]:data-[focus]:bg-black/10 data-[focus]:bg-black/5 cursor-pointer items-center rounded-sm px-2 py-2.5 md:px-2.5 md:py-3 select-none"
            >
              {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
              <div className="text-sm text-black font-light">{option}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
