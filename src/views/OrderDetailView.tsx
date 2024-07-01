import { useParams } from 'react-router-dom';
import OrderDetailCard from '../components/orders/OrderDetailCard';
import OrderDetailTable from '../components/orders/OrderDetailTable';
import MenuChevron from '../components/svg/icon/MenuChevron';

export default function OrderDetailView() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl w-full h-full mx-auto px-5 mt-10">
      <div className="flex items-center space-x-2 pl-1 cursor-pointer group mb-5">
        <MenuChevron isBackward />
        <button className="capitalize -translate-y-px">my order</button>
      </div>
      <OrderDetailCard />
      <OrderDetailTable />
      {/* <TestTable /> */}
    </div>
  );
}
