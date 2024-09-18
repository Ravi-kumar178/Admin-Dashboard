import React from 'react'
import SettingSection from './SettingSection'
import {  Wallet2Icon } from 'lucide-react'

const Billings = () => {
  return (
    <SettingSection icon={Wallet2Icon} title={"Billings"}>
        <div className='py-3 flex justify-between items-center'>
            <p className='text-gray-300'>Current Plan</p>
            <p className='text-indigo-500 font-semibold '>Pro</p>
        </div>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
            Upgrade Plan
        </button>
    </SettingSection>
  )
}

export default Billings