import { Route, Routes } from "react-router";
import AuthLayout from "./components/AuthLayout";
import Layout from "./components/Layout";
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
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestionationDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ContentManagement from "./pages/ContentManagement";

function App() {
  return (
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
  );
}

export default App;
