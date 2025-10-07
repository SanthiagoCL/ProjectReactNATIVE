"use client";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import Loading from './Loading';


export default function Header() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = () => {
                Cookies.remove('authToken');
                // show loading overlay briefly while navigating
                setIsLoading(true);
                setTimeout(() => {
                    router.push('/login');
                }, 250);
    };

    return (
        <header className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">ReactNativeAPP</h1>

            {/* Container para os botões */}
            <div className="flex items-center gap-4">

                <ThemeToggleButton/> 
                
                <button px onClick={() => router.push('/default')}
                    className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'
                >
                    Tela Padrão
                </button>

                <button 
                    onClick={handleLogout}
                    className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
                >
                

                 Sair
                </button>
            </div>
            {isLoading && <Loading message="Saindo..." />}
        </header>
    );
}