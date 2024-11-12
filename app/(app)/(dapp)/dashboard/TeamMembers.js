import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuItem, DropdownTrigger, DropdownContent } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const members = [
    { name: 'Sofia Davis', email: 'm@example.com', role: 'Owner' },
    { name: 'Jackson Lee', email: 'p@example.com', role: 'Member' },
    { name: 'Isabella Nguyen', email: 'i@example.com', role: 'Member' },
];

export default function TeamMembers() {
    const [teamMembers, setTeamMembers] = useState(members);

    return (
        <Card className="text-white">
            <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Invite your team members to collaborate.</CardDescription>
            </CardHeader>
            <CardContent>
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="font-bold">{member.name}</h1>
                                <p className="text-sm text-gray-400">{member.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
