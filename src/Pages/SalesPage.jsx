import React from 'react'
import { motion } from 'framer-motion'

import Header from '../Components/Common/Header'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import StatCard from '../Components/Common/StatCard'
import SalesOverviewChartArea from '../Components/Sales/SalesOverviewChartArea'
import SalesByCategoryChart from '../Components/Sales/SalesByCategoryChart'
import DailySalesTrend from '../Components/Sales/DailySalesTrend'

const salesStats = {
    totalRevenue: "$1,234,567",
    averageOrderValue: "$78.90",
    conversionRate: "3.45%",
    salesGrowth: "12.3%"
}

const SalesPage = () => {
  return (
    <div className='z-10 flex-1 overflow-auto relative'>
        <Header title={"Sales Dashboard"}/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                        {/* stats */}
            <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            >
                <StatCard name={"Total Revenue"} icon={DollarSign} value={salesStats.totalRevenue} colors={'#6366F1'}/>
                <StatCard name={"Avg. Order Value"} icon={ShoppingCart} value={salesStats.averageOrderValue} colors={"#10B981"}/>
                <StatCard name={"Conversion Rate"} icon={TrendingUp} value={salesStats.conversionRate} colors={"#F59E0B"}/>
                <StatCard name={"Sales Growth"} icon={CreditCard} value={salesStats.salesGrowth} colors={"#EF4444"}/>
            </motion.div>

            <SalesOverviewChartArea/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-8">
                <SalesByCategoryChart/>
                <DailySalesTrend/>
            </div>
        </main>
    </div>
  )
}

export default SalesPage