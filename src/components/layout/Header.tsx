import { useNavigate } from 'react-router-dom';
import useScroll from '../../hooks/use-scroll';
import { HeaderButtonTypes } from '../../types';
import CartPopover from '../popover/CartPopover';
import SearchPopover from '../popover/SearchPopover';
import UserInfoPopover from '../popover/UserInfoPopover';
import HamburgerIcon from '../svg/header/HamburgerIcon';
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
    icon: <HamburgerIcon />,
  },
];

export default function Header() {
  const { isTriggered } = useScroll();
  const navigate = useNavigate();

  const handleOnClick = (buttonRole: HeaderButtonTypes['role']) => {
    switch (buttonRole) {
      case 'user':
        break;
      case 'search':
        break;
      case 'menu':
        break;
      default:
        return;
    }
  };

  return (
    <header
      className={`fixed top-0 z-[1] w-full ${
        isTriggered ? 'bg-white' : 'bg-transparent'
      } px-4 duration-700 ease-in-out`}
    >
      <div className="relative mx-auto max-w-7xl w-full flex justify-end py-5">
        <MainLogo isTriggered={isTriggered} />
        <div className="flex items-center space-x-4 md:space-x-6">
          {buttonArray.map(({ role, icon }) => (
            <button key={role} onClick={() => handleOnClick(role)}>
              {icon}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
