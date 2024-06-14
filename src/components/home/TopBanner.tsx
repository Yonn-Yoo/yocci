import { useEffect, useState } from 'react';
import Button from '../common/Button';

export default function TopBanner() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTest(true);
    }, 600);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`w-full h-full bg-cover bg-center bg-no-repeat ${
          test ? ' scale-100' : 'scale-125'
        } duration-1000 ease-in-out`}
        style={{ backgroundImage: 'url(/img/gucci-main.png)' }}
      />
      <h3
        style={{ animationDelay: '0.6s' }}
        className="absolute bottom-28 right-1/2 translate-x-1/2 text-3xl text-white opacity-0 animate-showUp"
      >
        Hand Bag
      </h3>
      <div
        style={{ animationDelay: '1.2s' }}
        className="absolute bottom-10 right-1/2 translate-x-1/2 opacity-0 animate-showUp"
      >
        <Button>Explore the Collection</Button>
      </div>
    </div>
  );
}
