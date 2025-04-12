import { useState } from 'react';

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 p-3 bg-primary text-white rounded-full"
    >
      {darkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ToggleTheme;
