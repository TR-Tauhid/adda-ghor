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
import Users from "./components/Users";
import AuthProvider from "./provider/AuthProvider";
import PrivateRouter from "./routes/PrivateRouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        errorElement: <ErrorBoundary></ErrorBoundary>,
        element: (
          <Home>
            <PrivateRouter></PrivateRouter>
          </Home>
        ),
      },
      {
        path: "/menus",
        element: <Menu></Menu>,
        loader: async () => await fetch("https://adda-ghor-backend-tr-tauhids-projects.vercel.app/menus"),
        errorElement: <ErrorBoundary></ErrorBoundary>,
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
        loader: async () => await fetch("https://adda-ghor-backend-tr-tauhids-projects.vercel.app/menus"),
        errorElement: <ErrorBoundary></ErrorBoundary>,
      },
      {
        path: "/users",
        element: (
          <PrivateRouter>
            <Users></Users>
          </PrivateRouter>
        ),
        loader: async () => await fetch("https://adda-ghor-backend-tr-tauhids-projects.vercel.app/users"),
        errorElement: <ErrorBoundary></ErrorBoundary>,
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
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
