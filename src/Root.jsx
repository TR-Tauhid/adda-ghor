import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Helmet><title>Home</title></Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;