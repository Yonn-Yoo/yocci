type Props = {
  heroPhrase: string;
  heroImage: string;
};

export default function HeroBanner({ heroPhrase, heroImage }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="relative h-52 md:h-60 lg:h-96 2xl:h-[420px] bg-top bg-cover"
    >
      <div className="absolute w-full h-full flex items-center justify-center bg-black/50 left-0 top-0">
        <h3 className="uppercase text-white text-2xl md:text-3xl lg:text-4xl tracking-widest">
          {heroPhrase}
        </h3>
      </div>
    </div>
  );
}
