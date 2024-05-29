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
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import Profile from './components/root/dashboard/profile/Profile.jsx';
import Dashboard from './components/root/dashboard/mainDashboard/Dashboard.jsx';
import ManageProducts from './components/root/dashboard/manageProducts/ManageProducts.jsx';
import AddProducts from './components/root/dashboard/addProducts/AddProducts.jsx';
import EditProduct from './components/root/dashboard/editProduct/EditProduct.jsx';
import ProductDetails from './components/productDetails/ProductDetails.jsx';

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
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>
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
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: "/dashboard",
            element: <Profile></Profile>
          },
          {
            path: "/dashboard/manage-products",
            loader: () => fetch("http://localhost:3000/cycles"),
            element: <ManageProducts></ManageProducts>
          },
          {
            path: "/dashboard/add-products",
            element: <AddProducts></AddProducts>
          },
          {
            path: "/dashboard/edit/:id",
            element: <EditProduct></EditProduct>
          }
        ]
      }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
