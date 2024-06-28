import { useNavigate } from 'react-router-dom';
import { OrderDataType } from '../../types';
import Button from '../common/Button';

type Props = {
  orderData: OrderDataType;
};

export default function OrderCard({ orderData }: Props) {
  const navigate = useNavigate();
  const { id, date, totalQuantity } = orderData;

  return (
    <li className="h-full first:border-y border-b border-gray-300 py-5 flex items-center justify-between">
      <div className="flex flex-col space-y-1.5">
        <span>
          <strong className="capitalize">order no.: </strong>
          {id}
        </span>
        <span>
          <strong className="capitalize">order date: </strong>
          {date}
        </span>
        <span>
          <strong className="capitalize">number of items: </strong>
          {totalQuantity}
        </span>
      </div>
      <Button buttonType="primary" onClick={() => navigate(`/orders/${id}`)}>
        DETAIL
      </Button>
    </li>
  );
}
