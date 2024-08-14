import { useQuery } from '@tanstack/react-query';
import { getCartItems } from '../api/firebase';
import HeroBanner from '../components/common/HeroBanner';
import { useAuthContext } from '../contexts/auth-context';

export default function CartView() {
  const { uid } = useAuthContext();
  const {
    isLoading,
    error,
    data: cartItems,
  } = useQuery({
    enabled: !!uid,
    queryKey: ['cart'],
    queryFn: () => getCartItems(uid!),
  });
  // const hasItem = cartItems && cartItems.length > 0;

  if (isLoading) {
    return <span>loading...</span>;
  }

  if (error) {
    return <span>error</span>;
  }

  return (
    <section>
      <HeroBanner heroPhrase="shopping bag" heroImage="/img/cart-hero.webp" />
      <div className="max-w-7xl w-full h-full mx-auto px-5 mt-10">
        {cartItems?.map((item) => (
          <span key={item.id}>{item.itemName}</span>
        ))}
      </div>
    </section>
  );
}
