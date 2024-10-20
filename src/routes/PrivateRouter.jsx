import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { admin, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    console.log("loading is active", loading);
    return <Loading />;
  }
  if (admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location.pathname }} />;
};

export default PrivateRouter;
