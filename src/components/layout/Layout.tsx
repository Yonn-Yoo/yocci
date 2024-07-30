import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from '../../contexts/auth-context';
import { ToastProvider } from '../../contexts/toast-context';
import usePath from '../../hooks/use-path';
import ScrollToTop from '../common/ScrollToTop';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  const { isHome } = usePath();

  return (
    <ToastProvider>
      <AuthContextProvider>
        <ScrollToTop />
        <Header />
        <main className={`flex-grow ${!isHome && 'pt-16'}`}>
          <Outlet />
        </main>
        <Footer />
      </AuthContextProvider>
    </ToastProvider>
  );
}
