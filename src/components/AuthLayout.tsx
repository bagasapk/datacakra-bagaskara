import { Navigate, Outlet } from "react-router";
import { IcLogo } from "../assets/icons";
import Heading from "./Heading";
import { ACCESS_TOKEN, URL_DASHBOARD } from "../constants/config";

const AuthLayout = () => {
  if (localStorage.getItem(ACCESS_TOKEN))
    return <Navigate to={URL_DASHBOARD} />;
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:flex auth-layout lg:w-1/2 items-center bg-gradient-to-br from-primary to-dark relative overflow-hidden">
        <div className="mx-auto">
          <Heading className="flex justify-center">
            <IcLogo />
            Travel App
          </Heading>
          <p className="text-center text-white text-shadow-2xs">
            "Every Journey Begins with Inspiration"
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
