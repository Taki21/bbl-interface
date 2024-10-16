"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import Sidebar from '@/components/Sidebar';
import DappHeader from './dAppHeader';

export default function DappLayout({ children }) {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push('/login');
    }
  }, [isConnected, router]);

  if (!isConnected) {
    return null;
  }

  return (
    <div className="flex h-screen w-full bg-[#121214]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <DappHeader />
        <main className="flex-1 overflow-auto p-6 text-white">
          {children}
        </main>
      </div>
    </div>
  );
}
