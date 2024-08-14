import { removeFromCart } from '../api/firebase';
import { useAuthContext } from '../contexts/auth-context';
import { useToast } from '../contexts/toast-context';
import { CartItemType } from '../types';
import { createUuid } from '../utils/utils';
import ToastCloseIcon from './svg/icon/ToastCloseIcon';

type Props = {
  item: CartItemType;
};

export default function CartItemCard({
  item,
  item: { quantity, itemName, image, price, id },
}: Props) {
  const { uid } = useAuthContext();
  const { createToast } = useToast();

  const removeItem = async () => {
    if (!uid) return;

    await removeFromCart(uid, id)
      .then(() => {
        createToast({
          text: `Removed ${itemName} from shopping bag.`,
          id: createUuid(),
        });
      })
      .catch(console.log);
  };

  return (
    <li className="w-full h-1/3 flex justify-between items-center py-2.5 px-5">
      <div className="h-full flex items-center space-x-5">
        <div
          className="w-20 h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col space-y-1">
            <h4 className="text-sm font-medium">{itemName}</h4>
            <h3 className="font-light tracking-wider">
              US$ {(+price).toLocaleString()}
            </h3>
          </div>
          <span className="text-xs">Quantity: {quantity}</span>
        </div>
      </div>
      <button onClick={removeItem}>
        <ToastCloseIcon />
      </button>
    </li>
  );
}
