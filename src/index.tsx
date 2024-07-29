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
import ProductsView from './views/ProductsView';
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
        path: '/product/:productId',
      },
      {
        path: '/search/:query',
        element: <SearchView />,
      },
      {
        path: '/register',
        element: (
          <ProtectedRoute isAdminRequired>
            <SearchView />
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
