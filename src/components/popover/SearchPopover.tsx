import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStorage from '../../hooks/use-storage';
import MagnifierIcon from '../svg/header/MagnifierIcon';
import XIcon from '../svg/icon/XIcon';

const LABEL_CLASS =
  'absolute text-sm text-grayText duration-200 transform -translate-y-2 scale-75 top-8 z-10 origin-[0] left-5 peer-focus:left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0.5 peer-focus:scale-90 peer-focus:-translate-y-4';
const INPUT_CLASS =
  'h-[44px] lg:h-[50px] pl-1 block py-2.5 pt-6 px-0 w-full text-xs lg:text-sm text-black bg-white border-b border-black appearance-none focus:outline-none focus:ring-0 peer text-[#666666]';

export default function SearchPopover() {
  const navigate = useNavigate();
  const {
    items: histories,
    updateStorage,
    deleteItem,
  } = useStorage('serachHistory', true);
  const [query, setQuery] = useState('');

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && searchByKeyword();
  };

  const searchByKeyword = () => {
    if (!query) return;
    console.log(query);
    updateStorage(query);
    // navigate(`/search/${query}`);
    setQuery('');
  };

  return (
    <Popover>
      <PopoverButton className="flex items-center justify-center outline-none">
        <MagnifierIcon />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-0 md:translate-y-8"
        enterTo="opacity-100 translate-y-5"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-5"
        leaveTo="opacity-0 translate-y-0 md:translate-y-8"
      >
        <PopoverPanel
          anchor="bottom"
          className="!w-full md:!w-[500px] max-md:px-5 z-10 p-5 bg-white shadow-xl"
        >
          <div className="z-0 w-full">
            <div className="group">
              <input
                spellCheck={false}
                onKeyDown={handleEnter}
                autoComplete="off"
                type="text"
                id="search-query"
                maxLength={40}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={INPUT_CLASS}
                placeholder=" "
              />
              <label htmlFor="search-query" className={LABEL_CLASS}>
                What are you looking for?
              </label>
            </div>
            <section className="mt-3">
              <h6 className="underline underline-offset-4">
                Searched recently
              </h6>
              {histories.length ? (
                <ul className="flex flex-col space-y-4 mt-2">
                  {histories?.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between w-full md:w-1/2 text-sm font-light text-gray-800"
                    >
                      <div className="flex items-center space-x-1">
                        <MagnifierIcon isBlack />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                      <button onClick={() => deleteItem(item)}>
                        <XIcon />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-center font-light text-gray-800">
                  No search history.
                </p>
              )}
            </section>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
