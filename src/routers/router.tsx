import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayoutContainer from "../layouts/admin/AdminLayoutContainer";
import DefaultLayoutContainer from "../layouts/default/DefaultLayoutContainer";
import DashboardContainer from "../pages/dashboard/DashboardContainer";
const LoginContainer = lazy(() => import("./../pages/login/LoginContainer"));
const UserRegisterContainer = lazy(
  () => import("./../pages/user-register/UserRegisterContainer")
);

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayoutContainer />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/user-register" element={<UserRegisterContainer />} />
      </Route>
      <Route path="/admin" element={<AdminLayoutContainer />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<DashboardContainer />} />
      </Route>
    </Routes>
  );
};
export default RouterApp;
