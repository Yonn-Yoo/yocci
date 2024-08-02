import CollectionBanner from './CollectionBanner';

export default function GenderBanners() {
  return (
    <section className="w-full h-[140vh] md:h-screen">
      <ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 p-2 md:gap-5 md:p-5">
        <CollectionBanner
          imagePath="/img/gucci-men.png"
          badgePhrase="남성"
          mainPhrase="2024 Free Fall"
        />
        <CollectionBanner
          imagePath="/img/gucci-women.png"
          badgePhrase="여성"
          mainPhrase="Women"
        />
      </ul>
    </section>
  );
}
