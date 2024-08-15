import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addOrUpdateToCart,
  getCartItems,
  removeFromCart,
} from '../api/firebase';
import { useAuthContext } from '../contexts/auth-context';
import { CartItemType } from '../types';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCartItems(uid!),
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: (product: CartItemType) => addOrUpdateToCart(uid!, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts', uid] });
    },
  });

  const removeItem = useMutation({
    mutationFn: (id: string) => removeFromCart(uid!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts', uid] });
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
