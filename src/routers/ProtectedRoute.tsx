import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import isAuth from '../constants/isAuth';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!isAuth()) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
