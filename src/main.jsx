import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Root from "./Root";
import ReactDOM from "react-dom/client";
import Profiles from "./components/Profiles";
import Reviews from "./components/Reviews";
import Menu from "./components/Menu";
import Aboutus from "./components/AboutUs";
import Edititems from "./components/Edititems";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users"
import AuthProvider from "./provider/AuthProvider";
import PrivateRouter from "./routes/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menus",
        element: <Menu></Menu>,
        loader: () => fetch("http://192.168.155.162:5000/menus"),
      },
      {
        path: "/profiles",
        element: <Profiles></Profiles>,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRouter>
            <Reviews></Reviews>
          </PrivateRouter>
        ),
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/editItems",
        element: (
          <PrivateRouter>
            <Edititems></Edititems>
          </PrivateRouter>
        ),
        loader: () => fetch("http://192.168.155.162:5000/menus"),
      },
      {
        path: "/users",
        element: (
          <PrivateRouter>
            <Users></Users>
          </PrivateRouter>
        ),
        loader: () => fetch("http://192.168.155.162:5000/menus"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider forceRefresh={true} router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
