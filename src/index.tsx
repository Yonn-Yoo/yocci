import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '../src/index.css';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/routes/ProtectedRoute';
import reportWebVitals from './reportWebVitals';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import OrderDetailView from './views/OrderDetailView';
import OrdersView from './views/OrdersView';
import ProductDetailView from './views/ProductDetailView';
import ProductsView from './views/ProductsView';
import RegisterView from './views/RegisterView';
import SavedItemsView from './views/SavedItemsView';
import SearchView from './views/SearchView';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomeView /> },
      {
        path: '/sign-in',
        element: <LoginView />,
      },
      {
        path: '/saved-items',
        element: (
          <ProtectedRoute redirectPath="/sign-in">
            <SavedItemsView />
          </ProtectedRoute>
        ),
      },
      {
        path: '/orders',
        element: (
          <ProtectedRoute redirectPath="/sign-in">
            <OrdersView />
          </ProtectedRoute>
        ),
      },
      {
        path: '/orders/:id',
        element: (
          <ProtectedRoute redirectPath="/sign-in">
            <OrderDetailView />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:category',
        element: <ProductsView />,
      },
      {
        path: '/search/:query',
        element: <SearchView />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetailView />,
      },
      {
        path: '/search/:query',
        element: <SearchView />,
      },
      {
        path: '/register',
        element: (
          <ProtectedRoute isAdminRequired>
            <RegisterView />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

reportWebVitals();
