import { useRef } from 'react';
import useAnimate from '../../hooks/use-animate';
import Button from '../common/Button';

type Props = {
  imagePath: string;
  badgePhrase: string;
  mainPhrase: string;
  buttonPhrase?: string;
};

export default function CollectionBanner({
  imagePath,
  badgePhrase,
  mainPhrase,
  buttonPhrase = 'Explore the Collection',
}: Props) {
  const bannerRef = useRef(null);
  const isTriggered = useAnimate(bannerRef);

  return (
    <li ref={bannerRef} className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-[1] ${
          isTriggered ? ' scale-100' : 'scale-125'
        } duration-1000 ease-in-out`}
        style={{ backgroundImage: `url(${imagePath})` }}
      />
      <article className="w-full h-full flex flex-col items-center justify-between py-10 md:py-28">
        <h1 className="py-1 px-2.5 text-xs text-white backdrop-blur-sm rounded-sm overflow-hidden">
          {badgePhrase}
        </h1>
        <div className="flex flex-col space-y-5 items-center">
          <h3
            style={{ animationDelay: '0.6s' }}
            className={`text-3xl text-white opacity-0 ${
              isTriggered && 'animate-fadeIn'
            }`}
          >
            {mainPhrase}
          </h3>
          <div
            style={{ animationDelay: '1s' }}
            className={`opacity-0 ${isTriggered && 'animate-dropFilter'}`}
          >
            <Button buttonType="tertiary">{buttonPhrase}</Button>
          </div>
        </div>
      </article>
    </li>
  );
}
