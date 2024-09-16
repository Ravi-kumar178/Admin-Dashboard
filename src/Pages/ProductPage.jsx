import React from 'react'
import Header from '../Components/Common/Header'
import { motion } from 'framer-motion'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import StatCard from '../Components/Common/StatCard'


const ProductPage = () => {
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
                <StatCard name={"Total Products"} icon={Package} value={1234} colors={'#6366F1'}/>
                <StatCard name={"Top Selling"} icon={TrendingUp} value={89} colors={"#10B981"}/>
                <StatCard name={"Low Stock"} icon={AlertTriangle} value={23} colors={"#F59E0B"}/>
                <StatCard name={"Total Revenue"} icon={DollarSign} value={"$543,210"} colors={"#EF4444"}/>
            </motion.div>
        </main>

    </div>
  )
}

export default ProductPage