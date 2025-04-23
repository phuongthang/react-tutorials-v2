import { useTranslation } from "react-i18next";
import { cardData } from "./DashboardContainer";


interface DashboardProps {
    cards: cardData[];
}

const Dashboard: React.FC<DashboardProps> = ({ cards }) => {
    const {t} = useTranslation('dashboard')
    return (
        <div className="flex-1 overflow-auto">
            <div className="p-6">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">{t('Dashboard')}</h1>
                    <p className="text-gray-600">{t('WelcomeBack')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-gray-700 font-medium mb-2">{card.title}</h3>
                            <p className="text-2xl font-bold text-blue-600">{card.value}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('ActivityChart')}</h2>
                    <div className="h-64 flex items-center justify-center text-gray-500">
                        qưeqweqweqweqwe
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
