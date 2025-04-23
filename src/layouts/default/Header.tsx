import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_URL } from '../../constants/pathUrl';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { setCurrentLang } from '../../constants/constants';
const Header: React.FC = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation('header');

    const toggleLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'vi' : 'en';
        i18n.changeLanguage(nextLang);
        setCurrentLang(nextLang);
    };

    return (
        <nav className="bg-white py-2 md:py-4 border-b border-gray-200">
            <div className="container mx-auto px-4 md:flex md:items-center">
                <div className="flex items-center">
                    <img
                        src="/src/img/logo.png"
                        alt="logo"
                        className="w-14 h-auto cursor-pointer"
                        onClick={() => navigate(PATH_URL.DASHBOARD_URL)}
                    />
                </div>

                <div className="md:flex md:ml-auto mt-3 md:mt-0 items-center">
                    {['Home', 'About', 'Features', 'Pricing', 'Contact'].map((key: string) => (
                        <button
                            key={key}
                            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
                        >
                            {t(key)}
                        </button>
                    ))}

                    <button
                        onClick={() => navigate(PATH_URL.LOGIN_URL)}
                        className="p-2 lg:px-4 md:mx-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                    >
                        {t('Login')}
                    </button>

                    <button
                        onClick={() => navigate(PATH_URL.USER_REGISTER_URL)}
                        className="p-2 lg:px-4 md:mx-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                    >
                        {t('Sign up')}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className="ml-4 flex items-center space-x-1 border border-gray-300 bg-gray-50 p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        <Globe size={16} />
                        <span className="uppercase font-medium text-sm text-gray-700">
                            {i18n.language === 'en' ? 'VI' : 'EN'}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
