import { useRef } from 'react';
import useAnimate from '../../hooks/use-animate';
import Button from '../common/Button';

export default function TopBanner() {
  const bannerRef = useRef(null);
  const isTriggered = useAnimate(bannerRef);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[80vh] md:h-screen overflow-hidden"
    >
      <div
        className={`w-full h-full bg-cover bg-center bg-no-repeat ${
          isTriggered ? ' scale-100' : 'scale-125'
        } duration-1000 ease-in-out`}
        style={{ backgroundImage: 'url(/img/gucci-main.png)' }}
      />
      <h3
        style={{ animationDelay: '0.6s' }}
        className={`absolute bottom-28 right-1/2 translate-x-1/2 text-3xl text-white opacity-0 ${
          isTriggered && 'animate-fadeIn'
        }`}
      >
        Hand Bag
      </h3>
      <div
        style={{ animationDelay: '1s' }}
        className={`absolute bottom-10 right-1/2 translate-x-1/2 opacity-0 ${
          isTriggered && 'animate-dropFilter'
        }`}
      >
        <Button>Explore the Collection</Button>
      </div>
    </div>
  );
}
