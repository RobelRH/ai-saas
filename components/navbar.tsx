import React from 'react'
import { UserButton } from '@clerk/nextjs'
import Mobilesidebar from './mobile-sidebar'

function Navbar() {
  return (
    <div className='flex items-center p-4'>
        <Mobilesidebar />
        <div className='flex w-full justify-end'>
            <UserButton />
        </div>
    </div>
  )
}

export default Navbar