import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  optionArray: {
    label: string;
    value: string;
  }[];
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
  keyName: string;
};

export default function SelectBox({
  optionArray,
  value,
  setValue,
  keyName,
}: Props) {
  return (
    <Listbox
      value={value}
      onChange={(e) => {
        console.log(e);
        setValue((prev: any) => ({
          ...prev,
          [keyName]: e.value,
        }));
      }}
      __demoMode
    >
      <ListboxButton
        className={clsx(
          'relative block w-40 rounded-lg bg-white border border-gray-300 py-1.5 pr-8 pl-3 text-left text-sm/6 text-black',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black'
        )}
      >
        {selected.label}
        {/* <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white0"
            aria-hidden="true"
          /> */}
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          'mt-1 w-[var(--button-width)] rounded-xl border border-gray-300 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
          'transition ease-out data-[closed]:-translate-y-3 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-200'
        )}
      >
        {optionArray.map((option) => (
          <ListboxOption
            key={option.value}
            value={option}
            className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white0 duration-100 hover:bg-gray-200"
          >
            {/* <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" /> */}
            <div className="text-sm/6 text-black">{option.label}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
