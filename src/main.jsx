import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductDetails from './pages/ProductDetails.jsx';
import Shop from './pages/Shop.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
  },
  {
    path: "/product_details",
    element:<ProductDetails/> ,
  },
  {
    path: "/shop",
    element:<Shop/> ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
