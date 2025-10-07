"use client";

export default function Loading({ message = 'Carregando...' }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center gap-4 shadow-lg">
        <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-900 dark:text-gray-100">{message}</p>
        
      </div>
    </div>
  );
}
