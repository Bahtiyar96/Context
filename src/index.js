import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPaige from './pages/MainPaige';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Goods from './pages/Goods';
import Authorization from './pages/Authorization';
import Address from './pages/Address';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPaige />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '/goods',
        element: <Goods/>
      },
      {
        path: '/authorization',
        element: <Authorization />
      },
      {
        path: '/address',
        element: <Address />
      }
    ]
  },
  {
    path: '/pricing',
    element: <div>Pricing page</div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);
