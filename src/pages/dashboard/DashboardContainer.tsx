import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { PATH_URL } from '../../constants/pathUrl';



const DashboardContainer = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        
        navigate(PATH_URL.LOGIN_URL);
    };
    



    return <Dashboard handleLogout={handleLogout} />;
};
export default DashboardContainer;
