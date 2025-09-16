'use client';

import { useTheme } from '../contexts/ThemeContext'; // Ajuste o caminho se necessário

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();
  const { px } = require('tailwindcss/defaultTheme');

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}