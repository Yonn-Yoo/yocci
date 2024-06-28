import { OrderDataType } from '../../types';
import OrderCard from './OrderCard';

const tmpData: OrderDataType = {
  id: 'asdfasdf-zxcvzcxv-werqwer',
  date: 'Jan 1st, 2024',
  totalQuantity: 1,
  items: [
    {
      imagePath: '/asdfasdf',
      name: 'asdf',
      option: 's',
      quantity: 1,
      price: 1840,
    },
  ],
  recipientInfo: {
    firstName: 'Jason',
    lastName: 'Yoo',
    address1: 'Mapo-daero 167, Mapo-gu, Seoul',
    suburb: 'asdf',
    state: 'Seoul',
    postcode: '175-2909',
    phoneNumber: '010-8484-2892',
  },
};

export default function OrderCardGrid() {
  return (
    <section className="max-w-screen-xl w-full mx-auto mt-10 flex flex-col space-y-5 p-5">
      <h5 className="text-xl font-semibold">Orders</h5>
      <ul>
        <OrderCard orderData={tmpData} />
      </ul>
    </section>
  );
}
