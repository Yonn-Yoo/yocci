import { useLocation } from 'react-router-dom';
import useScroll from '../../hooks/use-scroll';
import { HeaderButtonTypes } from '../../types';
import MenuDrawer from '../home/MenuDrawer';
import CartPopover from '../popover/CartPopover';
import SearchPopover from '../popover/SearchPopover';
import UserInfoPopover from '../popover/UserInfoPopover';
import MainLogo from '../svg/header/MainLogo';

const buttonArray: HeaderButtonTypes[] = [
  {
    role: 'orders',
    icon: <CartPopover />,
  },
  {
    role: 'user',
    icon: <UserInfoPopover />,
  },
  {
    role: 'search',
    icon: <SearchPopover />,
  },
  {
    role: 'menu',
    icon: <MenuDrawer />,
  },
];

export default function Header() {
  const { pathname } = useLocation();
  const { isTriggered } = useScroll();
  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 z-[1] w-full ${
        isTriggered || !isHome ? 'bg-white' : 'bg-transparent'
      } px-4 duration-700 ease-in-out`}
    >
      <div className="relative mx-auto max-w-7xl w-full flex justify-end py-5">
        <MainLogo isTriggered={isTriggered} isHome={isHome} />
        <div className="flex items-center space-x-4 md:space-x-6">
          {buttonArray.map(({ role, icon }) => (
            <button key={role}>{icon}</button>
          ))}
        </div>
      </div>
    </header>
  );
}
