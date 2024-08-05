import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth-context';
import { useToast } from '../../contexts/toast-context';
import { ProductDataType } from '../../types';
import { createUuid } from '../../utils/utils';
import XMarkIcon from '../svg/icon/XMarkIcon';
import Button from './Button';

type Props = {
  isSavedItems?: boolean;
  product: ProductDataType;
};

export default function ProductCard({ isSavedItems, product }: Props) {
  const { createToast } = useToast();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { itemName, image, price, id } = product;

  const removeFromSavedItems = (productId: string) => {
    console.log('remove', productId);
  };

  const addToCart = () => {
    if (!user) {
      navigate('/sign-in');
      return;
    }

    createToast({
      text: `Added ${itemName} to shopping bag.`,
      id: createUuid(),
    });
  };

  return (
    <li className="relative flex h-full w-full flex-col items-center justify-between bg-white px-4 py-4 lg:pb-10">
      {isSavedItems && (
        <button
          onClick={() => removeFromSavedItems('product-id-asdf')}
          className="group absolute right-2 top-2 lg:right-4 lg:top-4"
        >
          <XMarkIcon />
        </button>
      )}
      <div className="flex justify-center h-80 p-4">
        <img className=" object-contain" src={image} alt={itemName} />
      </div>
      <div className="space-y-2 mb-4">
        <h3 className="text-center text-xs font-bold uppercase md:text-sm lg:text-base">
          {itemName}
        </h3>
        <p className="text-center text-xs md:text-sm lg:text-base">
          US$ {price.toLocaleString()}
        </p>
      </div>
      <Button onClick={addToCart}>ADD TO BAG</Button>
    </li>
  );
}
