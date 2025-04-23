import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { useTranslation } from 'react-i18next';


export interface cardData {
    title: string;
    value: string;
}

const DashboardContainer = () => {
    const {t, i18n}= useTranslation('dashboard')

    const [cards, setCards] = useState<cardData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    
    
    useEffect(() => {

        const fetchData = async () => {
            try {
               
                await new Promise((resolve) => setTimeout(resolve, 500));

                
                const data: cardData[] = [
                    { title: t('Users'), value: '1,254' },
                    { title: t('Projects'), value: '42' },
                    { title: t('Tasks'), value: '156' },
                    { title: t('Reports'), value: '28' },
                ];

                setCards(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [i18n.language]);

    
    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="text-lg text-gray-600">
                    {t('Loading...')}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Dashboard cards={cards} />
        </div>
    );
};

export default DashboardContainer;
