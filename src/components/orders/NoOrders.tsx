import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

export default function NoOrders() {
  const navigate = useNavigate();

  return (
    <section className="h-full flex flex-col space-y-10 justify-center items-center">
      <h5 className="uppercase text-2xl">your orders will appear here</h5>
      <p className="text-lg">
        Once you place an order, you will be able to follow its journey every
        step of the way.
      </p>
      <Button onClick={() => navigate('/')}>CONTINUE SHOPPING</Button>
    </section>
  );
}
