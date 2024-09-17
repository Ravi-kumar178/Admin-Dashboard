import React from 'react'
import Header from '../Components/Common/Header'
import StatCard from '../Components/Common/StatCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import OrderStatusDistribution from '../Components/Orders/OrderStatusDistribution'
import DailyOrderGraph from '../Components/Orders/DailyOrderGraph'
import OrderTable from '../Components/Orders/OrderTable'

const orderStats = {
    totalOrders:"1,234",
    pendingOrders:"56",
    completeOrders:"1,178",
    totalRevenue:"$98,765"
}

const OrdersPage = () => {
  return (
    <div className='z-10 flex-1 overflow-auto relative'>
          <Header title={"Orders"}/>
          <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                        {/* stats */}
                        <motion.div
                        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:1}}
                        >
                            <StatCard name={"Total Orders"} icon={ShoppingBag} value={orderStats.totalOrders} colors={'#6366F1'}/>
                            <StatCard name={"Pending Orders"} icon={Clock} value={orderStats.pendingOrders} colors={"#F59E0B"}/>
                            <StatCard name={"Complete Orders"} icon={CheckCircle} value={orderStats.completeOrders} colors={"#10B981"}/>
                            <StatCard name={"Total Revenue"} icon={DollarSign} value={orderStats.totalRevenue} colors={"#EF4444"}/>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-8">
                            <DailyOrderGraph/>
                            <OrderStatusDistribution/>
                        </div>

                        <OrderTable/>
          </main>
    </div>
  )
}

export default OrdersPage