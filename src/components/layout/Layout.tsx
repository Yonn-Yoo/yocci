import { Outlet } from 'react-router-dom';
import { ToastProvider } from '../../contexts/toast-context';
import { UserProvider } from '../../contexts/user-context';
import usePath from '../../hooks/use-path';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  const { isHome } = usePath();

  return (
    <UserProvider>
      <ToastProvider>
        <Header />
        <main className={`flex-grow ${!isHome && 'pt-16'}`}>
          <Outlet />
        </main>
        <Footer />
      </ToastProvider>
    </UserProvider>
  );
}
