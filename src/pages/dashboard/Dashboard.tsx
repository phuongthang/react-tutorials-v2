import { useNavigate } from 'react-router-dom';

interface DashboardProps {
    handleLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ handleLogout }) => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="text-center py-16 bg-blue-500 text-white">
                <h2 className="text-4xl font-bold">Welcome to My Website</h2>
                <p className="mt-4 text-lg">This is a simple homepage built with Tailwind CSS.</p>
                <p className="mt-2 text-lg">Explore our features and discover what we have to offer.</p>
            </section>
            <div className="flex justify-between">
                <button
                    className=" py-3 w-full text-sm tracking-wider rounded-lg text-white bg-green-600 hover:bg-blue-700 focus:outline-none"
                    onClick={() => navigate("user-list")}
                >
                    Danh sách user
                </button>
                <button
                    className="py-3 w-full text-sm tracking-wider rounded-lg text-white bg-green-600 hover:bg-blue-700 focus:outline-none"
                    onClick={handleLogout}
                >
                    Đăng xuất
                </button>
                <button className="py-3 w-full text-sm tracking-wider rounded-lg text-white bg-green-600 hover:bg-blue-700 focus:outline-none">
                    Khác
                </button>
            </div>
            <section className="container mx-auto p-8 text-center">
                <h3 className="text-3xl font-semibold text-gray-800">About Us</h3>
                <p className="mt-4 text-gray-600">We provide high-quality services to help your business grow.</p>
                <p className="mt-2 text-gray-600">Our team is dedicated to delivering the best experience possible.</p>
            </section>
        </div>
    );
};
export default Dashboard;
