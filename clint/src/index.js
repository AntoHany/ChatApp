import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Public from './pages/Public';
import ErrorPage from './pages/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/public',
    element: <Public />
  },
  {
    path: '/*',
    element: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);