import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import PrivateRoute from "./components/PrivateRoute";
import {
  URL_CATEGORY,
  URL_CATEGORY_DETAIl,
  URL_CONTENT_MANAGEMENT,
  URL_DASHBOARD,
  URL_DESTINATION,
  URL_DESTINATION_DETAIL,
  URL_LOGIN,
  URL_REGISTER,
} from "./constants/config";

const Categories = lazy(() => import("./pages/Categories"));
const CategoryDetail = lazy(() => import("./pages/CategoryDetail"));
const ContentManagement = lazy(() => import("./pages/ContentManagement"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Destinations = lazy(() => import("./pages/Destinations"));
const DestinationDetail = lazy(() => import("./pages/DestinationDetail"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <Suspense fallback={<Loading fullscreen />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={URL_REGISTER} element={<Register />}></Route>
          <Route path={URL_LOGIN} element={<Login />}></Route>
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path={URL_DASHBOARD} element={<Dashboard />}></Route>
            <Route path={URL_CATEGORY} element={<Categories />}></Route>
            <Route
              path={URL_CATEGORY_DETAIl}
              element={<CategoryDetail />}
            ></Route>
            <Route path={URL_DESTINATION} element={<Destinations />}></Route>
            <Route
              path={URL_DESTINATION_DETAIL}
              element={<DestinationDetail />}
            ></Route>
            <Route
              path={URL_CONTENT_MANAGEMENT}
              element={<ContentManagement />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
