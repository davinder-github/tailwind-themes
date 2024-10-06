import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {

    console.log('window mtath cimedia is ',window.matchMedia('(prefers-color-scheme:dark)'));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const data=['first','second','third'];
  const toggleTheme = (theme) => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      localStorage.removeItem('theme');
     
      
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  };

  return (
    <>
      <h1
        className={`text-2xl  text-color`}
      >
        Dummy Text
      </h1>

      <button
        onClick={() => toggleTheme("dark")}
        className="mr-2  px-4 py-2  text-buttonText"
      >
        Dark Mode
      </button>
      <button
        onClick={() => toggleTheme("light")}
        className="mr-2 px-4 text-buttonColor py-2 bg-buttonBg text-buttonText"
      >
        Light Mode
      </button>
      <button
        onClick={() => toggleTheme("system")}
        className="px-4 py-2 text-buttonColor bg-buttonBg text-buttonText"
      >
        System Preference
      </button>
    <div className='bg-primary w-full  text-color'>
    <h1>List items</h1>
      <ul className="py-1 overflow-auto w-[230px]  max-h-60">
        {data.map((item, index) => (
          <li
            key={index}
            className={`
             px-4 py-2 bg-primaryBackground text-sm hover:bg-secondary cursor-pointer`}
          >
            {item}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default App;
