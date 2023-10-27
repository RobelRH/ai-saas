'use client'

import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import Mobilesidebar from './mobile-sidebar'
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

function Navbar() {

  const { user } = useUser();

  return (
    <div className='flex items-center p-4'>
      <Mobilesidebar />
      <div className='flex w-full justify-end'>
        <Avatar className='h-8 w-8'>
          <UserButton /> 
          <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar