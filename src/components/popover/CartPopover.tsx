import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getCartItems } from '../../api/firebase';
import { useAuthContext } from '../../contexts/auth-context';
import usePath from '../../hooks/use-path';
import useScroll from '../../hooks/use-scroll';
import { CartItemType } from '../../types';
import CartItemCard from '../CartItemCard';
import Button from '../common/Button';
import ShoppinBagIcon from '../svg/header/ShoppinBagIcon';
import XIcon from '../svg/icon/XIcon';

export default function CartPopover() {
  const { uid } = useAuthContext();
  const { isTriggered } = useScroll();
  const { isHome } = usePath();
  const navigate = useNavigate();
  const { data: cartItems } = useQuery({
    enabled: !!uid,
    queryKey: ['cart'],
    queryFn: () => getCartItems(uid!),
  });
  const hasItem = cartItems && cartItems.length > 0;

  return (
    <Popover>
      <PopoverButton
        as="div"
        className="relative flex items-center justify-center outline-none"
      >
        <ShoppinBagIcon />
        {hasItem && (
          <div
            className={`absolute right-1/2 -bottom-[3px] translate-x-1/2 w-1 h-1 flex items-center justify-center rounded-full ${
              isTriggered || !isHome ? 'bg-black' : 'bg-white'
            } duration-500 ease-in-out`}
          />
        )}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom"
        className="!max-w-lg w-full rounded-sm bg-white z-10 shadow-xl transition duration-200 translate-y-5 ease-in-out data-[closed]:translate-y-8 data-[closed]:opacity-0"
      >
        {({ close }) => (
          <>
            <section className="relative h-14 flex items-center justify-center">
              <h4>Added to Cart</h4>
              <button
                onClick={() => close()}
                className="absolute bottom-1/2 translate-y-1/2 right-5 w-8 h-8 flex justify-center items-center hover:scale-150 duration-300 ease-out"
              >
                <XIcon />
              </button>
            </section>
            <section className="border-y border-gray-300 h-72 overflow-y-auto">
              {hasItem ? (
                <ul className="w-full h-full flex flex-col space-y-2">
                  {cartItems?.map((item: CartItemType) => (
                    <CartItemCard key={item.id} item={item} />
                  ))}
                </ul>
              ) : (
                <div className="h-full flex flex-col space-y-5 items-center justify-center">
                  <p>Your cart is empty.</p>
                  <Button
                    onClick={() => {
                      close();
                      navigate('/products/all');
                    }}
                    buttonType="secondary"
                  >
                    Explore items
                  </Button>
                </div>
              )}
            </section>
            <section className="flex flex-col space-y-4 p-4">
              <Button>CHECKOUT</Button>
              <Button
                onClick={() => {
                  close();
                  navigate('/cart');
                }}
                buttonType="secondary"
              >
                VIEW SHOPPING BAG
              </Button>
            </section>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
}
