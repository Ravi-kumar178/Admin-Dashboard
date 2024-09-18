import React from 'react'
import SettingSection from './SettingSection'
import { User } from 'lucide-react'

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
        <div className="flex flex-col sm:flex-row items-center mb-6">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="profile" loading='lazy' className='h-20 w-20 rounded-full object-cover mr-4' />
            <div>
                <h3 className='text-lg font-semibold text-gray-100'>Sara Jay</h3>
                <p className='text-gray-400'>sara.jay@example.com</p>
            </div>
        </div>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
            Edit Profile
        </button>
    </SettingSection>
  )
}

export default Profile