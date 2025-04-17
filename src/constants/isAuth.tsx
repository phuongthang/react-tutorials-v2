import { jwtDecode } from 'jwt-decode';

const isAuth = (): boolean => {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;
    try {
        const decoded: any = jwtDecode(token);
        if (!decoded.exp) return false;
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
    } catch (error) {
        return false;
    }
};

export default isAuth;
