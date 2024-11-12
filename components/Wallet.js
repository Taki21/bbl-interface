"use client";

import {
    Address,
    EthBalance,
    Identity,
    Name,
    Socials,
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownBasename,
    WalletDropdownDisconnect,
    WalletDropdownFundLink,
    WalletDropdownLink,
} from '@coinbase/onchainkit/wallet';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuItem, DropdownTrigger } from '@/components/ui/dropdown-menu';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { useAccount } from 'wagmi';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ArrowBigLeft, ArrowDownLeftFromSquare, ArrowLeft, ArrowLeftFromLineIcon, LogOut, MoveLeft, User, User2Icon, Wallet2Icon, WalletIcon, WalletMinimalIcon } from 'lucide-react';
import { PiWalletLight, PiWalletThin } from "react-icons/pi";
  
function WalletComponent() {
    const { address, isConnected } = useAccount();

    return (
        <Card className={`${!isConnected ? 'bg-primary border-none rounded-md' : ''}`}>
            <Wallet className={`p-0 text-sm ${!isConnected ? 'flex justify-center' : ''}`}>
                <ConnectWallet className="flex p-2 items-center justify-center" text="Connect Wallet">
                    <PiWalletLight className='self-center text-xl' />
                    <Name />
                </ConnectWallet>
                <WalletDropdown>
                    <div className='flex items-center justify-between py-1 pl-2 pr-1 rounded-sm gap-2 bg-secondary'>
                        <LogOut />
                        <WalletDropdownDisconnect className="p-0" />
                    </div>
                </WalletDropdown>
            </Wallet>
        </Card>
    );
}
  
export default function WalletButton() {
    return (
        <div className="">
            <WalletComponent />
        </div>
    );
}