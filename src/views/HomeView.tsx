import CollectionBanner from '../components/home/CollectionBanner';
import GenderBanners from '../components/home/GenderBanners';
import ServicesSection from '../components/home/ServicesSection';
import TopBanner from '../components/home/TopBanner';

export default function HomeView() {
  return (
    <div className="w-full">
      <TopBanner />
      <GenderBanners />
      <section className="w-full h-[70vh] md:h-screen">
        <ul className="w-full h-full p-2 md:p-5">
          <CollectionBanner
            imagePath="/img/gucci-rido.png"
            badgePhrase="여성"
            mainPhrase="Gucci Rido"
          />
        </ul>
      </section>
      <ServicesSection />
    </div>
  );
}
