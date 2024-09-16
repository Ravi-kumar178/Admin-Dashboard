import React from 'react'
import Header from '../Components/Common/Header'
import { motion } from 'framer-motion'
import StatCard from '../Components/Common/StatCard'
import { BarChart2, ShoppingBag, User, Zap } from 'lucide-react'
import SalesoverviewChart from '../Components/Overview/SalesoverviewChart'
import CategoryDistribution from '../Components/Overview/CategoryDistribution'
import SalesChannelChart from '../Components/Overview/SalesChannelChart'

const OverviewPage = () => {
  return (
    <div className='z-10 flex-1 overflow-auto relative'>
        <Header title={"Overview"}/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

          {/* stats */}
          <motion.div
           className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
           initial={{opacity:0, y:20}}
           animate={{opacity:1, y:0}}
           transition={{duration:1}}
          >
            <StatCard name={"Total Sales"} icon={Zap} value={"$12,345"} colors={'#6366F1'}/>
            <StatCard name={"New Users"} icon={User} value={"1,234"} colors={"#8B5CF6"}/>
            <StatCard name={"Total Products"} icon={ShoppingBag} value={"567"} colors={"#EC4899"}/>
            <StatCard name={"Conversion Rate"} icon={BarChart2} value={"12.5%"} colors={"#10B981"}/>
          </motion.div>

          {/* charts */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
             <SalesoverviewChart/>
             <CategoryDistribution/>
            
          </div> 
          <div className='mb-2 mt-8'>
            <SalesChannelChart/>
          </div>
        </main>
    </div>
  )
}

export default OverviewPage