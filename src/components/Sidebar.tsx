import { useState } from 'react';
import { PATH_URL } from '../constants/pathUrl';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface MenuItem {
    id: string;
    icon: string;
    label: string;
}
interface SlidebarProps{
  toggleSidebar : () => void;
  sidebarOpen: boolean;
}
const Sidebar: React.FC<SlidebarProps> = ({toggleSidebar, sidebarOpen}) => {
    const { t, i18n } = useTranslation('sidebar');
    const [language, setLanguage] = useState(i18n.language || 'vi');
    const menuItems: MenuItem[] = [
        { id: 'dashboard', icon: '📊', label: t('Menu.Dashboard') },
        { id: 'reports', icon: '📝', label: t('Menu.Reports') },
        { id: 'users', icon: '👥', label: t('Menu.Users') },
        { id: 'settings', icon: '⚙️', label: t('Menu.Settings') },
        { id: 'projects', icon: '📁', label: t('Menu.Projects') },
        { id: 'statistics', icon: '📈', label: t('Menu.Statistics') },
        { id: 'help', icon: '❓', label: t('Menu.Help') },
    ];
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState('dashboard');

    const handleSelectMenuItem = (id: string) => {
        setActiveItem(id);
        switch (id) {
            case 'dashboard':
                if(sidebarOpen){
                  toggleSidebar();
                }
                navigate(PATH_URL.DASHBOARD_URL);
                
                break;
            case 'users':
                if(sidebarOpen){
                    toggleSidebar();
                  }
                navigate(PATH_URL.USER_LIST_URL);
                
                break;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate(PATH_URL.LOGIN_URL);
    };
   
    const handleChangeLanguage = () => {
        const newLang = language === 'vi' ? 'en' : 'vi';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        if(sidebarOpen){
            toggleSidebar();
          }
    };

    return (
        <div
            className={`${
                sidebarOpen ? 'w-64' : 'w-16'
            } bg-slate-800 text-white transition-width duration-300 ease-in-out overflow-hidden h-screen flex flex-col`}
        >
            <button
                onClick={toggleSidebar}
                className="w-16 h-16 bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors"
            >
                <span className="text-2xl">{sidebarOpen ? '❌' : '☰'}</span>
            </button>

            <div className="mt-6 flex-grow">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
                            activeItem === item.id ? 'bg-blue-600' : 'hover:bg-slate-700'
                        }`}
                        onClick={() => handleSelectMenuItem(item.id)}
                    >
                        <div className="w-8 text-center text-xl">{item.icon}</div>
                        <span
                            className={`ml-4 whitespace-nowrap ${
                                sidebarOpen ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-300`}
                        >
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
            <div
                className="px-4 py-3 bg-slate-700 hover:bg-slate-600 cursor-pointer transition-colors flex items-center mb-2 mx-2 rounded"
                onClick={handleChangeLanguage}
            >
                <div className="w-8 text-center text-xl">{language === 'vi' ? '🇻🇳' : '🇺🇸'}</div>
                <span
                    className={`ml-4 whitespace-nowrap ${
                        sidebarOpen ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                >
                    {language === 'vi' ? 'Tiếng Việt' : 'English'}
                </span>
            </div>
            <div
                className="px-4 py-4 bg-green-300 hover:bg-red-600 cursor-pointer transition-colors flex items-center mt-auto mb-4 mx-2 rounded"
                onClick={handleLogout}
            >
                <div className="w-8 text-center text-xl">🔓</div>
                <span
                    className={`ml-4 whitespace-nowrap font-medium ${
                        sidebarOpen ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                >
                    {t('Menu.Log out')}
                </span>
            </div>
        </div>
    );
};

export default Sidebar;
