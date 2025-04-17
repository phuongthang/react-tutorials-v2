import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayoutContainer from '../layouts/admin/AdminLayoutContainer';
import DefaultLayoutContainer from '../layouts/default/DefaultLayoutContainer';
import DashboardContainer from '../pages/dashboard/DashboardContainer';
import ProtectedRoute from './ProtectedRoute';


const LoginContainer = lazy(() => import('./../pages/login/LoginContainer'));

const UserRegisterContainer = lazy(() => import('./../pages/user-register/UserRegisterContainer'));
const UserForgotPasswordContainer = lazy(() => import('./../pages/user-forgot-password/UserForgotPasswordContainer'));
const UserComfirmPasswordCodeContainer = lazy(() => import('../pages/user-comfirm-password-code/UserComfirmPasswordCodeContainer'));



const UserListContainer = lazy(() => import('./../pages/user-list/UserListContainer'));
const UserDetailContainer = lazy(() => import('./../pages/user-detail/UserDetailContainer'));


const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayoutContainer />}>
                <Route index element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<LoginContainer />} />
                <Route path="/user-register" element={<UserRegisterContainer />} />
                <Route path="/user-forgot-password" element={<UserForgotPasswordContainer />} />
                <Route path="/user-comfirm-password-code" element={<UserComfirmPasswordCodeContainer />} />

            </Route>

            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminLayoutContainer />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="/admin/dashboard" element={<DashboardContainer />} />
                <Route path="/admin/dashboard/user-list" element={<UserListContainer />} />
                <Route path="/admin/dashboard/user-detail/:id" element={<UserDetailContainer />} />
            </Route>

            {/*<Route path="/admin" element={<AdminLayoutContainer />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<DashboardContainer />} />
      </Route>*/}
        </Routes>
    );
};
export default RouterApp;
