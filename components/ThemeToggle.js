import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className='fixed sm:left-auto top-5 left-4 transition duration-500 ease-in-out rounded-full'>
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-gray-600 dark:text-gray-100 sm:text-4xl text-3xl cursor-pointer'
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-themesec dark:text-gray-400 sm:text-4xl text-3xl cursor-pointer'
        />
      )}
    </div>
  );
};

export default Toggle;
