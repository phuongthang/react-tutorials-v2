import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../constants/pathUrl';

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-white py-2 md:py-4 border-b-2 border-gray-150">
            <div className="container px-4 mx-auto md:flex md:items-center">
                <div className="flex items-center">
                    <img src="./src/img/logo.png" alt="logo" className="w-[60px] inline-block" 
                    onClick={() => navigate(PATH_URL.DASHBOARD_URL)}/>
                </div>
                <div className="md:flex md:flex-row md:ml-auto mt-3 md:mt-0">
                    <button className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                        Home
                        </button>
                    <button className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                        About
                    </button>
                    <button className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                        Features
                    </button>
                    <button className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                        Pricing
                    </button>
                    <button className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                        Contact
                    </button>
                    <button 
                        onClick={() => navigate(PATH_URL.LOGIN_URL)}
                        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Login
                    </button>
                    <button 
                        onClick={() => navigate(PATH_URL.USER_REGISTER_URL)}
                        className="p-2 lg:px-4 md:mx-2 text-white rounded bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    );
};
export default Header;
