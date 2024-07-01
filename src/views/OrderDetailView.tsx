import { useNavigate } from 'react-router-dom';
import OrderDetailCard from '../components/orders/OrderDetailCard';
import OrderDetailTable from '../components/orders/OrderDetailTable';
import MenuChevron from '../components/svg/icon/MenuChevron';

export default function OrderDetailView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl w-full h-full mx-auto px-5 mt-10">
      <button
        onClick={() => navigate('/orders')}
        className="flex items-center space-x-2 pl-1 cursor-pointer group mb-5"
      >
        <MenuChevron isBackward />
        <span className="capitalize -translate-y-px">my order</span>
      </button>
      <OrderDetailCard />
      <OrderDetailTable />
    </div>
  );
}
