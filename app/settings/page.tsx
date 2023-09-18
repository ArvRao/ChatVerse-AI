import React from 'react'
import { UserProfile } from '@clerk/nextjs';

function SettingsPage() {
  return (
    <center className='container mx-auto mt-5'>
        <UserProfile />
    </center>
  )
}

export default SettingsPage;