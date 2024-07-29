import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/firebase';
import { useToast } from '../../contexts/toast-context';
import { useUser } from '../../contexts/user-context';
import { createUuid } from '../../utils/utils';
import UserIcon from '../svg/header/UserIcon';

const buttonLists = [
  { label: 'MY ORDERS', path: '/orders' },
  { label: 'SAVED ITEMS', path: '/saved-items' },
];

export default function UserInfoPopover() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { createToast } = useToast();
  const isAdmin = user?.isAdmin;

  const handleLogoutSuccess = () => {
    createToast({
      text: 'Signed out successfully',
      id: createUuid(),
    });
    navigate('/');
  };

  return (
    <Popover>
      <PopoverButton
        as="div"
        className="flex items-center justify-center outline-none"
      >
        <UserIcon />
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="max-md:px-5 rounded-sm bg-white z-10 shadow-xl transition duration-200 translate-y-5 ease-in-out data-[closed]:translate-y-8 data-[closed]:opacity-0"
      >
        {({ close }) => (
          <ul className="w-full md:w-fit !py-2 !px-2 rounded-sm bg-white flex flex-col">
            {buttonLists.map(({ label, path }) => (
              <li key={label}>
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
            ))}
            <div className="w-full h-px bg-gray-300 my-2" />
            {isAdmin && (
              <li>
                <button
                  className="w-full px-2.5 py-2 rounded-sm hover:bg-slate-200 text-left duration-100 ease-out"
                  onClick={() => {
                    close();
                    navigate('/register');
                  }}
                >
                  REGISTER
                </button>
              </li>
            )}
            <li>
              <button
                className="w-full px-2.5 py-2 rounded-sm hover:bg-slate-200 text-left duration-100 ease-out"
                onClick={() => {
                  close();
                  user
                    ? logout().then(handleLogoutSuccess)
                    : navigate('/sign-in');
                }}
              >
                {user ? 'SIGN OUT' : 'SIGN IN'}
              </button>
            </li>
          </ul>
        )}
      </PopoverPanel>
    </Popover>
  );
}
