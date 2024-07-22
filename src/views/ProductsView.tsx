import { useParams } from 'react-router-dom';
import HeroBanner from '../components/common/HeroBanner';
import ItemsGrid from '../components/saved-items/ItemsGrid';
import { MapType } from '../types';

const heroImageMap: MapType = {
  women: '/img/hero-women.jpg',
  men: '/img/hero-men.jpg',
  'hand-bags': '/img/hero-bags.jpg',
};

export default function ProductsView() {
  const { category } = useParams();

  const heroImage = heroImageMap[category as string] || '/img/hero-default.jpg';

  return (
    <div className="w-full h-full">
      <HeroBanner
        heroPhrase={category?.replace('-', ' ') as string}
        heroImage={heroImage}
      />
      <ItemsGrid />
    </div>
  );
}
