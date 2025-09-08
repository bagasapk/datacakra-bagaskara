import { Navigate, Outlet } from "react-router";
import { ACCESS_TOKEN, URL_LOGIN } from "../constants/config";

const PrivateRoute = () => {
  if (localStorage.getItem(ACCESS_TOKEN)) return <Outlet />;
  return <Navigate to={URL_LOGIN} />;
};

export default PrivateRoute;
