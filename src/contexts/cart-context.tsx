import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCartItems } from '../api/firebase';
import { CartItemType } from '../types';
import { useAuthContext } from './auth-context';
import { useToast } from './toast-context';

export const CartContext = createContext<{
  cartItems: CartItemType[];
  addItem: () => void;
  removeItem: () => void;
  hasItems: boolean | undefined;
}>({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  hasItems: undefined,
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { createToast } = useToast();
  const { uid } = useAuthContext();
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const hasItems = cartItems && cartItems.length > 0;

  useEffect(() => {
    getCartItems(uid!).then(setCartItems).catch(console.log);
  }, [uid]);

  const addItem = () => {
    console.log('add');
  };

  const removeItem = () => {
    console.log('remove');
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, hasItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
