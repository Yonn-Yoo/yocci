import { ProductDataType } from '../../types';
import ProductCard from '../common/ProductCard';

type Props = {
  savedItems: ProductDataType[];
};

export default function SavedItemsGrid({ savedItems }: Props) {
  return (
    <section className="mt-20 mb-32">
      <div className="flex flex-col justify-center items-center">
        <h3 className="w-fit uppercase font-medium text-2xl mb-4 pb-4 px-2 border-b border-black">
          saved items
        </h3>
        <span className="capitalize font-light text-xl">
          you have {savedItems.length} items in saved items.
        </span>
      </div>
      <ul className="grid w-full grid-cols-2 gap-px border-y bg-gray-200 md:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-14">
        {savedItems.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ul>
    </section>
  );
}
