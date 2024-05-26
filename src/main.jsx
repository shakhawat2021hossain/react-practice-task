import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Root from './components/root/Root';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import Login from './components/login/Login.jsx';
import Home from './components/home/Home.jsx';
import Register from './components/register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/products",
        element: <Products></Products>
      }
    ]

  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children:[
//       {
//         path: '/contact',
//         children: <Contact></Contact>
//       },
//       {
//         path: '/products',
//         children: <Products></Products>
//       },
//       {
//         path: '/contact',
//         children: <Contact></Contact>
//       },
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
