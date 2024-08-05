import { Link } from 'react-router-dom';
import usePath from '../../hooks/use-path';
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
    component: <CartPopover />,
  },
  {
    role: 'user',
    component: <UserInfoPopover />,
  },
  {
    role: 'search',
    component: <SearchPopover />,
  },
  {
    role: 'menu',
    component: <MenuDrawer />,
  },
];

export default function Header() {
  const { isTriggered } = useScroll();
  const { isHome } = usePath();

  return (
    <header
      className={`fixed top-0 z-[1] w-full ${
        isTriggered || !isHome ? 'bg-white' : 'bg-transparent'
      } px-4 duration-700 ease-in-out`}
    >
      <div className="relative mx-auto max-w-7xl w-full flex justify-end py-5">
        <Link to="/">
          <MainLogo isTriggered={isTriggered} isHome={isHome} />
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6">
          {buttonArray.map(({ role, component }) => (
            <button key={role}>{component}</button>
          ))}
        </div>
      </div>
    </header>
  );
}
