import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

export default function NoOrders() {
  const navigate = useNavigate();

  return (
    <section className="mt-20 flex flex-col space-y-10 justify-center items-center p-5">
      <div>
        <h5 className="uppercase text-2xl font-medium">
          your orders will appear here
        </h5>
        <div className="w-3/4 mx-auto h-px bg-black mt-5" />
      </div>
      <p className="text-lg text-center">
        Once you place an order, you will be able to follow its journey every
        step of the way.
      </p>
      <Button onClick={() => navigate('/')}>CONTINUE SHOPPING</Button>
    </section>
  );
}
