import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
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
      <PopoverPanel
        transition
        anchor="bottom"
        className="max-md:px-5 rounded-sm bg-white z-10 shadow-xl transition duration-200 translate-y-5 ease-in-out data-[closed]:translate-y-8 data-[closed]:opacity-0"
      >
        {({ close }) => (
          <ul className="w-full md:w-fit !py-2 !px-2 rounded-sm bg-white flex flex-col">
            {buttonLists.map(({ label, path }) => {
              const isSignInButton = label === 'SIGN IN';

              return (
                <li key={label}>
                  {isSignInButton && (
                    <div className="w-full h-px bg-gray-300 my-2" />
                  )}
                  <button
                    className="w-full px-2.5 py-2 rounded-sm hover:bg-slate-200 text-left duration-100 ease-out"
                    onClick={() => {
                      close();
                      navigate(path);
                    }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </PopoverPanel>
    </Popover>
  );
}
