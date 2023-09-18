import React from 'react'
import { UserButton, UserProfile } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';

function SettingsPage() {
  return (
    <div className='container mx-auto mt-8 p-4'>
        <UserProfile />
    </div>
  )
}

export default SettingsPage;