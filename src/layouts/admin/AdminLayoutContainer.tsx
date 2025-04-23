import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';

export default function AdminLayoutContainer() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex">
            <div className="fixed top-0 left-0 h-full z-50">
                <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            </div>

            <div className={`ml-16 flex-1 transition-all duration-300 ${sidebarOpen ? 'blur-sm' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
}
