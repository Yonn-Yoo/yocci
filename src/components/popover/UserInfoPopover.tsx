import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../svg/header/UserIcon';

const buttonLists = [
  { label: 'MY ORDERS', path: '/orders' },
  { label: 'FAVORITE ITEMS', path: '/favorites' },
  { label: 'SIGN IN', path: '/sign-in' },
];

export default function UserInfoPopover() {
  const navigate = useNavigate();

  return (
    <Popover>
      <PopoverButton className="flex items-center justify-center outline-none">
        <UserIcon />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-5"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-5"
        leaveTo="opacity-0 translate-y-8"
      >
        <PopoverPanel
          anchor="bottom"
          className="w-fit !py-2 !px-2 rounded-sm bg-white z-10"
        >
          <ul className="flex flex-col">
            {buttonLists.map(({ label, path }) => {
              const isSignInButton = label === 'SIGN IN';

              return (
                <li key={label}>
                  {isSignInButton && (
                    <div className="w-full h-px bg-gray-300 my-2" />
                  )}
                  <button
                    className="w-full px-2.5 py-2 hover:bg-gray-200 text-left duration-100 ease-out"
                    onClick={() => navigate(path)}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
