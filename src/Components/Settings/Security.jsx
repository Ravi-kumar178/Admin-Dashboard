import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Security = () => {
    const [twoFactor,setTwoFactor] = useState(false);
  return (
    <SettingSection icon={Lock} title={"Security"}>
        <ToggleSwitch
         label={"Two-factor Authentication"}
         isOn={twoFactor}
         onToggle={()=>setTwoFactor(!twoFactor)}
        />
       <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
            Change Password
        </button>
    </SettingSection>
  )
}

export default Security