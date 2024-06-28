import HeroBanner from '../components/common/HeroBanner';
import OrderCardGrid from '../components/orders/OrderCardGrid';

export default function OrdersView() {
  return (
    <div className="w-full h-full">
      <HeroBanner heroPhrase="order history" heroImage="/img/cart-hero.webp" />
      <OrderCardGrid />
      {/* <NoOrders /> */}
    </div>
  );
}
