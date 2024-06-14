import { useEffect, useMemo, useState } from 'react';

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isTriggered = scrollPosition > 30;

  const handleScroll = () => setScrollPosition(window.scrollY);

  // const debouncedHandleScroll = useMemo(() => debounce(handleScroll, 50), []);
  const debouncedHandleScroll = useMemo(() => handleScroll, []);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  return { scrollPosition, isTriggered };
}
