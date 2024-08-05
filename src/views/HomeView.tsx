import CollectionBanner from '../components/home/CollectionBanner';
import GenderBanners from '../components/home/GenderBanners';
import ServicesSection from '../components/home/ServicesSection';

export default function HomeView() {
  return (
    <div className="w-full">
      <div className="w-full h-[70vh] md:h-screen">
        <CollectionBanner
          imagePath="/img/gucci-main.png"
          mainPhrase="Hand Bags"
          category="hand-bags"
          buttonType="primary"
        />
      </div>
      <GenderBanners />
      <section className="w-full h-[70vh] md:h-screen">
        <ul className="w-full h-full p-2 md:p-5">
          <CollectionBanner
            imagePath="/img/gucci-rido.png"
            badgePhrase="여성"
            mainPhrase="Gucci Rido"
            category="women"
          />
        </ul>
      </section>
      <ServicesSection />
    </div>
  );
}
