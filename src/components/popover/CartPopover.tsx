import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import CartItemCard from '../CartItemCard';
import Button from '../common/Button';
import ShoppinBagIcon from '../svg/header/ShoppinBagIcon';
import XIcon from '../svg/icon/XIcon';

export default function CartPopover() {
  return (
    <Popover>
      <PopoverButton
        as="div"
        className="flex items-center justify-center outline-none"
      >
        <ShoppinBagIcon />
      </PopoverButton>

      <PopoverPanel
        transition
        anchor="bottom"
        className="!max-w-lg w-full rounded-sm bg-white z-10 shadow-xl transition duration-200 translate-y-5 ease-in-out data-[closed]:translate-y-8 data-[closed]:opacity-0"
      >
        {({ close }) => (
          <>
            <section className="relative h-14 flex items-center justify-center">
              <h4>Added to Shopping Bag</h4>
              <button
                onClick={() => close()}
                className="absolute bottom-1/2 translate-y-1/2 right-5 w-8 h-8 flex justify-center items-center hover:scale-150 duration-300 ease-out"
              >
                <XIcon />
              </button>
            </section>
            <section className="border-y border-gray-300 h-72 overflow-y-auto">
              <ul className="w-full h-full flex flex-col space-y-2">
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
                <CartItemCard />
              </ul>
            </section>
            <section className="flex flex-col space-y-4 p-4">
              <Button>CHECKOUT</Button>
              <Button buttonType="secondary">VIEW SHOPPING BAG</Button>
            </section>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
}
