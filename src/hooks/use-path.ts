import { useLocation } from 'react-router-dom';

export default function usePath() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return { pathname, isHome };
}
