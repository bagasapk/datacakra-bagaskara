import { Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Header from "./Header";
import useGetMe from "../hooks/useGetMe";
import LoadingLayout from "./LoadingLayout";

const Layout = () => {
  useAuth();
  const { isLoading } = useGetMe();

  return (
      <LoadingLayout fullscreen isLoading={isLoading} isEmpty={false}>
        <Header />
        <Outlet />
      </LoadingLayout>
  );
};

export default Layout;
