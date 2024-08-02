import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from '../../contexts/auth-context';
import { ToastProvider } from '../../contexts/toast-context';
import usePath from '../../hooks/use-path';
import ScrollToTop from '../common/ScrollToTop';
import Footer from './Footer';
import Header from './Header';

const queryClient = new QueryClient();

export default function Layout() {
  const { isHome } = usePath();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
