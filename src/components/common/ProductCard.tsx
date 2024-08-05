import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  addOrUpdateToSaved,
  getSavedItems,
  removeFromSaved,
} from '../../api/firebase';
import { useAuthContext } from '../../contexts/auth-context';
import { ProductDataType } from '../../types';
import HeartIcon from '../svg/icon/HeartIcon';
import XMarkIcon from '../svg/icon/XMarkIcon';

type Props = {
  isSavedItems?: boolean;
  product: ProductDataType;
};

export default function ProductCard({ isSavedItems, product }: Props) {
  const [saved, setSaved] = useState(false);
  const { uid } = useAuthContext();
  const navigate = useNavigate();
  const { itemName, image, price, id } = product;

  useEffect(() => {
    if (!uid) return;
    getSavedItems(uid).then((items) => {
      const stringifiedItems = JSON.stringify(items);
      stringifiedItems.includes(product.id) && setSaved(true);
    });
  }, [uid, product]);

  const handleSave = () => {
    if (!uid) return;
    setSaved((prev) => !prev);
    saved ? removeFromSaved(uid, product.id) : addOrUpdateToSaved(uid, product);
  };

  return (
    <li
      onClick={() => navigate(`/product/${id}`, { state: { product } })}
      className="relative flex h-full w-full flex-col items-center justify-between bg-white px-4 py-4 lg:pb-10 cursor-pointer"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSave();
        }}
        className="absolute right-3 top-3"
      >
        <HeartIcon saved={saved} />
      </button>
      {isSavedItems && (
        <button
          onClick={() => removeFromSaved(uid!, product.id)}
          className="group absolute right-2 top-2 lg:right-4 lg:top-4"
        >
          <XMarkIcon />
        </button>
      )}
      <div className="flex justify-center h-80 p-4 overflow-hidden">
        <img
          draggable={false}
          className="object-contain group-hover:scale-105 duration-300 ease-out"
          src={image}
          alt={itemName}
        />
      </div>
      <div className="space-y-2 mb-4">
        <h3 className="text-center text-xs font-bold uppercase md:text-sm lg:text-base">
          {itemName}
        </h3>
        <p className="text-center text-xs md:text-sm lg:text-base">
          US$ {(+price).toLocaleString()}
        </p>
      </div>
    </li>
  );
}
