import { CartItemType } from '../types';

type Props = {
  item: CartItemType;
};

export default function CartItemCard({
  item: { quantity, itemName, image, price },
}: Props) {
  return (
    <li className="w-full h-1/3 flex items-center space-x-5 p-2.5">
      <div
        className="w-1/4 h-full bg-contain bg-center bg-no-repeat"
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
    </li>
  );
}
