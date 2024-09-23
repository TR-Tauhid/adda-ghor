import './index.css'
import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Root from './routes/Root';
import AuthProvider from './provider/AuthProvider';
import ReactDOM from 'react-dom/client'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        ptah: '/aboutus',
        element: <AboutUs></AboutUs>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider forceRefresh={true} router={router}></RouterProvider>
  </React.StrictMode>,
)
