// app/(app)/(dapp)/components/Sidebar.js
'use client';

import { useAccount, useDisconnect } from 'wagmi';
import Link from 'next/link';
import { FiLogOut, FiHome, FiShoppingCart, FiDollarSign, FiHelpCircle, FiSettings } from 'react-icons/fi';
import { FaTasks } from 'react-icons/fa';
import { RiSwap3Fill } from 'react-icons/ri';
import Avatar from 'boring-avatars';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const pathname = usePathname();

  const handleLogout = () => {
    disconnect();
  };

  return (
    <div className="flex flex-col justify-between h-screen w-72 bg-[#121214] text-white p-6 border-r border-[#1a1a1b]">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center mb-10">
          <Image src="/logo.jpg" alt="Logo" className='rounded-full' width={32} height={32} />
          <h2 className="ml-2 text-3xl font-bold text-white">BBL dApp</h2>
        </div>
        <Link href="/dashboard" className={`flex items-center text-lg hover:bg-[#1A1B1F] p-2 rounded transition duration-300 ease-in-out ${pathname === '/dashboard' ? 'bg-red-700' : ''}`}>
          <FiHome size={20} className="mr-2" />
          <span>Dashboard</span>
        </Link>
        <Link href="/tasks" className={`flex items-center text-lg hover:bg-[#1A1B1F] p-2 rounded transition duration-300 ease-in-out ${pathname === '/tasks' ? 'bg-red-700' : ''}`}>
          <FaTasks size={20} className="mr-2" />
          <span>Tasks</span>
        </Link>
        <Link href="/transactions" className={`flex items-center text-lg hover:bg-[#1A1B1F] p-2 rounded transition duration-300 ease-in-out ${pathname === '/transactions' ? 'bg-red-700' : ''}`}>
          <RiSwap3Fill size={20} className="mr-2" />
          <span>Transactions</span>
        </Link>
        <Link href="/settings" className={`flex items-center text-lg hover:bg-[#1A1B1F] p-2 rounded transition duration-300 ease-in-out ${pathname === '/settings' ? 'bg-red-700' : ''}`}>
          <FiSettings size={20} className="mr-2" />
          <span>Settings</span>
        </Link>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="flex flex-col items-center text-center justify-between w-full p-4 mb-4 rounded-lg transition duration-300 ease-in-out bg-cover bg-center relative" style={{ backgroundImage: 'url(/invite-bg.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-90 rounded-lg"></div>
          <div className="relative z-10">
            <div className='flex flex-col'>
              <span className="text-lg font-semibold text-white">Join the BBL!</span>
              <span className="text-sm text-gray-400 py-2">We invite you to the Blockchain Business Lab @ SBU! Become part of our exclusive community.</span>
              <button className="w-full mt-2 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition duration-300 ease-in-out">
                Apply Now!
              </button>
            </div>
          </div>
        </div>

        {isConnected && (
          <div className="flex items-center justify-between w-full p-3 mt-8 bg-red-600 rounded-lg">
            <div className="flex items-center space-x-3">
              <Avatar
                size={40}
                name={address}
                variant="beam"
                colors={["#FF6B6B", "#F7FFF7", "#4ECDC4", "#1A535C", "#FF6347"]}
              />
              <div className="leading-tight">
                <span className="text-md font-semibold block">User</span>
                <span className="text-sm text-gray-100">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
              </div>
            </div>
            <button onClick={handleLogout} className="text-white hover:text-gray-300 transition duration-300 ease-in-out ml-4">
              <FiLogOut size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
