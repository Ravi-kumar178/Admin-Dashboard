import React from 'react'
import Header from '../Components/Common/Header'
import Profile from '../Components/Settings/Profile'
import Notification from '../Components/Settings/Notification'
import Security from '../Components/Settings/Security'
import Billings from '../Components/Settings/Billings'
import ConnectedAccounts from '../Components/Settings/ConnectedAccounts'
import DangerZone from '../Components/Settings/DangerZone'

const SettingsPage = () => {
  return (
    <div className='z-10 flex-1 overflow-auto relative'>
        <Header title={"Settings"}/>
        <main className='max-w-4xl mx-auto space-y-8 py-6 px-4 lg:px-8'>
            <Profile/>
            <Notification/>
            <Security/>
            <Billings/>
            <ConnectedAccounts/>
            <DangerZone/>
        </main>
    </div>
  )
}

export default SettingsPage