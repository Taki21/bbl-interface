'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import WalletButton from '@/components/Wallet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();

  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="email" className="block mb-1 text-sm font-medium">Enter Code</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter ID"
              className="w-full p-3 rounded-md focus:outline-none focus:ring-2"
            />
          </div>
          <div className="bg-[#EA4234] rounded-lg text-center p-2">
            {connectors.map((connector) => {
              if (connector.name === "Web3Auth") {
                return (
                  <button
                    className="card"
                    key={connector.id}
                    onClick={() => connect({ connector })}
                  >
                    Login With Google
                  </button>
                );
              }
              return null; // Explicitly return null for non-matching connectors
            })}
            {error && <div>{error.message}</div>}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
