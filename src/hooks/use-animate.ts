import { useEffect, useState } from 'react';

export default function useAnimate(elementRef: React.MutableRefObject<any>) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) setTriggered(true);
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 0.5,
    });

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef.current]);

  return triggered;
}
