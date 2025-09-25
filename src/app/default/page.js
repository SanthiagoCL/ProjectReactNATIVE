'use client'

import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';


function AppLayout({ children }) {
    const { isDark } = useTheme();

  return (
    // A classe 'dark' é aplicada aqui, com base no valor do contexto
    <div className={isDark ? 'dark' : ''}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

// ✅ CORRETO: Este é o componente "pai" que apenas fornece o contexto
export default function Default() {
  return (
    // O Provider envolve o componente filho
    <ThemeProvider>
      <AppLayout>
        {/* O conteúdo da sua página vai aqui */}
        <h2 className="text-2xl font-bold mb-4">Essa é a pagina inicial, seja bem vindo! </h2>
        <p>Use o botão no header para trocar o tema. "Não Funciona"</p>
      </AppLayout>
    </ThemeProvider>
  );
}