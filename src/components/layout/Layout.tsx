import { Outlet } from 'react-router-dom';
import usePath from '../../hooks/use-path';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  const { isHome } = usePath();

  return (
    <>
      <Header />
      <main className={`flex-grow ${!isHome && 'pt-16'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
