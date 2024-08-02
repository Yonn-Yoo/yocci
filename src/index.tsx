import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '../src/index.css';
import Layout from './components/layout/Layout';
import reportWebVitals from './reportWebVitals';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import OrderDetailView from './views/OrderDetailView';
import OrdersView from './views/OrdersView';
import ProductDetailView from './views/ProductDetailView';
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
        element: <SavedItemsView />,
      },
      {
        path: '/orders',
        element: <OrdersView />,
      },
      {
        path: '/orders/:id',
        element: <OrderDetailView />,
      },
      {
        path: '/products/:category',
      },
      {
        path: '/search/:query',
        element: <SearchView />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetailView />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
