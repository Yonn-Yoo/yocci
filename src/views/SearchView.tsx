import { useParams } from 'react-router-dom';
import HeroBanner from '../components/common/HeroBanner';
import ProductsGrid from '../components/products/ProductsGrid';

export default function SearchView() {
  const { query } = useParams();

  return (
    <div className="w-full h-full">
      <HeroBanner heroPhrase={`"${query}"`} heroImage="/img/hero-default.jpg" />
      <ProductsGrid />
    </div>
  );
}
