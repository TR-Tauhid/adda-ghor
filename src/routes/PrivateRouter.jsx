import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children, requiredRole }) => {
  const { admin, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (admin) {
    console.log("admin is here...");
    return children;
  }

  return <Navigate to="/" state={location.pathname}></Navigate>;
};

export default PrivateRouter;
