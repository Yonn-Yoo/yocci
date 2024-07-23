import { useParams } from 'react-router-dom';
import HeroBanner from '../components/common/HeroBanner';
import ProductsGrid from '../components/products/ProductsGrid';
import { MapType } from '../types';

const heroImageMap: MapType = {
  women: '/img/hero-women.jpg',
  men: '/img/hero-men.jpg',
  'hand-bags': '/img/hero-bags.jpg',
};

export default function ProductsView() {
  const { category } = useParams();

  const heroImage = heroImageMap[category!] || '/img/hero-default.jpg';

  return (
    <div className="w-full h-full">
      <HeroBanner
        heroPhrase={category?.replace('-', ' ')!}
        heroImage={heroImage}
      />
      <ProductsGrid />
    </div>
  );
}
