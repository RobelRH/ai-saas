import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardPage() {
  return (
    <div>
      <p>Welcome to DashboardPage</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default DashboardPage