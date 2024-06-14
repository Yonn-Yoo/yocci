import GenderBanners from '../components/home/GenderBanners';
import TopBanner from '../components/home/TopBanner';

export default function HomeView() {
  return (
    <div className="w-full">
      <TopBanner />
      <GenderBanners />
    </div>
  );
}
