'use client';

import { useTheme } from '../contexts/ThemeContext'; // O caminho para o seu contexto

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}