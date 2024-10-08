import './index.css'
import {
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Root from './routes/Root';
import ReactDOM from 'react-dom/client'
import Profiles from './components/Profiles';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Aboutus from './components/AboutUs';
import AddItems from './components/AddItems';



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
        path: '/menus',
        element: <Menu></Menu>,
      },
      {
        path: '/profiles',
        element: <Profiles></Profiles>,
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/aboutus',
        element: <Aboutus></Aboutus>,
      },
      {
        path: '/addItems',
        element: <AddItems></AddItems>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider forceRefresh={true} router={router}></RouterProvider>
  </React.StrictMode>,
)
