// app/(app)/(dapp)/dAppHeader.js
'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiSettings, FiSun, FiMoon } from 'react-icons/fi';
import { RiCopperCoinLine } from 'react-icons/ri';

export default function DappHeader() {
  const pathname = usePathname();
  const [title, setTitle] = useState('dApp');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Extract the last segment from the path and set it as the title
    const segments = pathname.split('/').filter(Boolean);
    const formattedTitle = segments.length > 0 ? segments[segments.length - 1].charAt(0).toUpperCase() + segments[segments.length - 1].slice(1) : 'dApp';

    setTitle(formattedTitle);
  }, [pathname]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-[#121214] text-white border-b border-[#1a1a1b]">
      <h1 className="text-2xl font-bold text-red-500">{title}</h1>
      <div className="flex items-center space-x-2">
        
        <button onClick={toggleDarkMode} className="bg-[#1A1B1F] p-2 rounded-xl text-white hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
        <button className="bg-[#1A1B1F] p-2 rounded-xl text-white hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
          <FiSettings size={24} />
        </button>
        <div className='flex items-center justify-center space-x-1 bg-red-600 py-2 pl-2 pr-3 rounded-xl'>
          <RiCopperCoinLine size={24} />
          <h1 className='font-bold'>0.00 BBL</h1>
        </div>
        <ConnectButton showBalance={false} chainStatus="none" />
      </div>
    </header>
  );
}