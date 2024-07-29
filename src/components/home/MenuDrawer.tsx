import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/firebase';
import { useToast } from '../../contexts/toast-context';
import { useUser } from '../../contexts/user-context';
import { createUuid } from '../../utils/utils';
import Button from '../common/Button';
import Underline from '../common/Underline';
import HamburgerIcon from '../svg/header/HamburgerIcon';
import MenuChevron from '../svg/icon/MenuChevron';
import WhiteXIcon from '../svg/icon/WhiteXIcon';

const categoryArray = ['all', 'hand-bags', 'women', 'men'];

export default function MenuDrawer() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { createToast } = useToast();

  function close() {
    setIsOpen(false);
  }

  const handleLogout = () => {
    logout().then(() =>
      createToast({
        text: 'Signed out successfully',
        id: createUuid(),
      })
    );
  };

  return (
    <>
      <i onClick={() => setIsOpen(true)}>
        <HamburgerIcon />
      </i>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <DialogPanel
          transition
          onClick={close}
          className="fixed overflow-hidden flex justify-end bg-black/50 backdrop-blur data-[closed]:transform-[scale(95%)] data-[closed]:bg-black/0 data-[closed]:backdrop-blur-none transition duration-500 inset-0 z-10 w-screen overflow-y-auto"
        >
          <DialogPanel
            transition
            className="relative w-full min-h-full md:max-w-lg rounded-sm bg-white p-14 backdrop-blur duration-500 transition-transform ease-in-out data-[closed]:translate-x-full"
          >
            <Button
              onClick={close}
              className="absolute right-5 top-5 w-12 h-12 hover:scale-90 duration-500 ease-in-out"
              buttonType="close"
            >
              <WhiteXIcon />
            </Button>
            <section className="flex flex-col space-y-10 mt-10">
              <ul className="flex flex-col space-y-5">
                {categoryArray.map((category) => (
                  <li
                    key={category}
                    className="flex items-center space-x-1 cursor-pointer group"
                  >
                    <button
                      onClick={() => {
                        close();
                        navigate(`products/${category}`);
                      }}
                      className="uppercase text-lg"
                    >
                      {category.replace('-', ' ')}
                    </button>
                    <MenuChevron />
                  </li>
                ))}
              </ul>
              <div className="bg-black w-full h-px" />
              <ul className="flex flex-col space-y-5">
                <button
                  onClick={() => {
                    close();
                    user ? handleLogout() : navigate('/sign-in');
                  }}
                  className="flex flex-col -space-y-0.5 w-fit capitalize group"
                >
                  <span>{user ? 'sign out' : 'sign in'}</span>
                  <Underline />
                </button>
                <button
                  onClick={() => {
                    close();
                    navigate('/orders');
                  }}
                  className="flex flex-col -space-y-0.5 w-fit capitalize group"
                >
                  <span>my order</span>
                  <Underline />
                </button>
              </ul>
            </section>
          </DialogPanel>
        </DialogPanel>
      </Dialog>
    </>
  );
}
