import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Account from './pages/Account.jsx';
import ProductCart from './pages/ProductCart.jsx';
import Shop from './pages/Shop.jsx';
import Faq from './pages/Faq.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/productcart',
        element: <ProductCart />
      },
      {
        path: '/faq',
        element: <Faq />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
