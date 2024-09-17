import React from 'react'
import { motion } from 'framer-motion'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import Header from '../Components/Common/Header'
import StatCard from '../Components/Common/StatCard'
import UserTable from '../Components/Users/UserTable'
import UserGrowthChart from '../Components/Users/UserGrowthChart'
import UserActivityHeapMap from '../Components/Users/UserActivityHeapMap'
import UserDemographicChart from '../Components/Users/UserDemographicChart'

const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%"
}


const UsersPage = () => {
  return (
    <div className='z-10 flex-1 overflow-auto relative'>
         <Header title={"Products"}/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
          {/* stats */}
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:1}}
                >
                    <StatCard name={"Total Users"} icon={UsersIcon} value={userStats.totalUsers.toLocaleString()} colors={'#6366F1'}/>
                    <StatCard name={"New Users Today"} icon={UserPlus} value={userStats.newUsersToday} colors={"#10B981"}/>
                    <StatCard name={"Active Users"} icon={UserCheck} value={userStats.activeUsers.toLocaleString()} colors={"#F59E0B"}/>
                    <StatCard name={"Churn Rate"} icon={UserX} value={userStats.churnRate} colors={"#EF4444"}/>
            </motion.div>

            {/* user table */}
            <UserTable/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <UserGrowthChart/>
              <UserActivityHeapMap/>
              <UserDemographicChart/>
            </div>
        </main>   
    </div>
  )
}

export default UsersPage