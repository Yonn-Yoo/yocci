import { MouseEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import SelectList from '../components/common/SelectList';
import { useAuthContext } from '../contexts/auth-context';
import { useToast } from '../contexts/toast-context';
import useCart from '../hooks/use-cart';
import { CartItemType } from '../types';
import { createUuid } from '../utils/utils';

export default function ProductDetailView() {
  const {
    state: { product },
  } = useLocation();
  const { category, description, id, image, itemName, options, price } =
    product;
  const navigate = useNavigate();
  const { uid } = useAuthContext();
  const [option, setOption] = useState(options[0]);
  const { createToast } = useToast();
  const { addOrUpdateItem } = useCart();

  const handleOnAddCart = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!uid) {
      navigate('/sign-in');
      return;
    }
    const addingProduct: CartItemType = {
      itemName,
      image,
      price,
      id,
      option,
      quantity: 1,
    };
    await addOrUpdateItem(addingProduct).then(() => {
      createToast({
        text: `Added ${itemName} to shopping bag.`,
        id: createUuid(),
      });
    });
  };

  return (
    <div className="mx-auto max-w-sm px-4 md:max-w-lg lg:flex lg:max-w-7xl">
      <div className="py-6 lg:w-full">
        <img src={image} alt="Cotton Jersey hooded Sweatshirt" />
      </div>
      <div className="space-y-5 md:space-y-10 mt-10 lg:w-full flex flex-col">
        <div>
          <div>
            <p className="text-center font-bold uppercase">{itemName}</p>
            <p className="text-center font-medium">
              AU$ {(+price).toLocaleString()}
            </p>
          </div>
          <SelectList
            options={options}
            value={option}
            onChange={setOption}
            label="option"
          />
        </div>
        <p className="mt-10">{description}</p>
        <Button onClick={handleOnAddCart} additionalClass="w-full">
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
