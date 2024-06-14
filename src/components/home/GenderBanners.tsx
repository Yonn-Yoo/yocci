import Button from '../common/Button';

export default function GenderBanners() {
  return (
    <section className="w-full h-screen">
      <ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <li className="relative w-full h-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-[1]"
            style={{ backgroundImage: 'url(/img/gucci-men.png)' }}
          />
          <article className="w-full h-full flex flex-col items-center justify-between py-28">
            <h1 className="py-1 px-2.5 text-xs text-white backdrop-blur-sm rounded-sm overflow-hidden">
              남성
            </h1>
            <div className="flex flex-col space-y-5 items-center">
              <h3
                style={{ animationDelay: '0.6s' }}
                className="text-3xl text-white opacity-0 animate-showUp"
              >
                2024 Free Fall
              </h3>
              <div
                style={{ animationDelay: '1.2s' }}
                className="opacity-0 animate-showUp"
              >
                <Button buttonType="tertiary">Explore the Collection</Button>
              </div>
            </div>
          </article>
        </li>
        <li className="relative w-full h-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-[1]"
            style={{ backgroundImage: 'url(/img/gucci-women.png)' }}
          />
          <article className="w-full h-full flex flex-col items-center justify-between py-24">
            <h1 className="py-1 px-2.5 text-xs text-white backdrop-blur-sm rounded-sm overflow-hidden">
              여성
            </h1>
            <div className="flex flex-col space-y-5 items-center">
              <h3
                style={{ animationDelay: '0.6s' }}
                className="text-3xl text-white opacity-0 animate-showUp"
              >
                Gucci Rido
              </h3>
              <div
                style={{ animationDelay: '1.2s' }}
                className="opacity-0 animate-showUp"
              >
                <Button buttonType="tertiary">Explore the Collection</Button>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
}
