import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

export default function UserAvatar() {

    const { user } = useUser();

    return (
        <Avatar className='h-8 w-8'>
            <UserButton />
            {/* <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
            </AvatarFallback> */}
        </Avatar>
    )
}
