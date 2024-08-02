import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getProducts } from '../../api/firebase';
import ProductCard from '../common/ProductCard';

export default function ProductsGrid() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ['products'], queryFn: getProducts });

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <section className="mt-20 mb-32">
      {error && <span>error</span>}
      {isLoading && <span>loading..</span>}
      <ul className="grid w-full grid-cols-2 gap-px border-y bg-gray-200 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
