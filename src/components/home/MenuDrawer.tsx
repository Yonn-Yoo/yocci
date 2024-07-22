import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import HamburgerIcon from '../svg/header/HamburgerIcon';
import MenuChevron from '../svg/icon/MenuChevron';
import WhiteXIcon from '../svg/icon/WhiteXIcon';

const categoryArray = ['all', 'hand bags', 'women', 'men'];
const buttonArray = [
  {
    label: 'sign in',
    path: '/sign-in',
  },
  {
    label: 'my orders',
    path: '/orders',
  },
];

export default function MenuDrawer() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <i onClick={open}>
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
                      {category}
                    </button>
                    <MenuChevron />
                  </li>
                ))}
              </ul>
              <div className="bg-black w-full h-px" />
              <ul className="flex flex-col space-y-5">
                {buttonArray.map(({ label, path }) => (
                  <button
                    key={path}
                    onClick={() => {
                      close();
                      navigate(path);
                    }}
                    className="flex flex-col -space-y-0.5 w-fit capitalize group"
                  >
                    <span>{label}</span>
                    <div className="w-0 group-hover:w-full duration-500 ease-in-out h-px bg-black" />
                  </button>
                ))}
              </ul>
            </section>
          </DialogPanel>
        </DialogPanel>
      </Dialog>
    </>
  );
}
