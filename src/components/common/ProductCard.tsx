import { useNavigate } from 'react-router-dom';
import { useToast } from '../../contexts/toast-context';
import { useUser } from '../../contexts/user-context';
import { createUuid } from '../../utils/utils';
import XMarkIcon from '../svg/icon/XMarkIcon';
import Button from './Button';

type Props = {
  isSavedItems?: boolean;
};

export default function ProductCard({ isSavedItems }: Props) {
  const { createToast } = useToast();
  const { user } = useUser();
  const navigate = useNavigate();

  const removeFromSavedItems = (productId: string) => {
    console.log('remove', productId);
  };

  const addToCart = () => {
    if (!user) {
      navigate('/sign-in');
      return;
    }

    createToast({
      text: 'Added to shopping bag.',
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
      <div className="flex justify-center p-4">
        <img
          src="https://res.cloudinary.com/df1icniod/image/upload/v1691646506/bndotwt0govmh8p3iwvq.avif"
          alt="Geometric Square G Print Silk Shirt"
        />
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-center text-xs font-bold uppercase md:text-sm lg:text-base">
          Geometric Square G Print Silk Shirt
        </p>
        <p className="text-center text-xs md:text-sm lg:text-base">AU$ 1,850</p>
      </div>
      <Button onClick={addToCart}>ADD TO BAG</Button>
    </li>
  );
}
