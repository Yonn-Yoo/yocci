import ProductCard from '../common/ProductCard';

export default function ProductsGrid() {
  return (
    <section className="mt-20 mb-32">
      <ul className="grid w-full grid-cols-2 gap-px border-y bg-gray-200 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </section>
  );
}
