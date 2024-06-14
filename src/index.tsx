import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import '../src/index.css';
import Layout from './components/layout/Layout';
import reportWebVitals from './reportWebVitals';
import HomeView from './views/HomeView';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomeView /> },
      {
        path: '/sign-in',
      },
      {
        path: '/favorites',
      },
      {
        path: '/orders',
      },
      {
        path: '/products/:category',
      },
      {
        path: '/product/:productId',
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
