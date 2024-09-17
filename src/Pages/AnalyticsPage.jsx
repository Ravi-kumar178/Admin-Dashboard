import React from 'react'
import Header from '../Components/Common/Header'
import OverviewCard from '../Components/Analytics/OverviewCard'
import ChannelPerformance from '../Components/Analytics/ChannelPerformance'
import RevenueChart from '../Components/Analytics/RevenueChart'
import ProductPerformance from '../Components/Analytics/ProductPerformance'
import UserRetention from '../Components/Analytics/UserRetention'
import CustomerSegmantation from '../Components/Analytics/CustomerSegmantation'
import AIPoweredInsights from '../Components/Analytics/AIPoweredInsights'

const AnalyticsPage = () => {
  return (
    <div className='z-10 flex-1 overflow-auto relative bg-gray-900'>
        <Header title={"Analytics Dashboard"}/>

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <OverviewCard/>

            <RevenueChart/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                <ChannelPerformance/>
                <ProductPerformance/>
                <UserRetention/>
                <CustomerSegmantation/>
            </div>
            <AIPoweredInsights/>
        </main>
    </div>
  )
}

export default AnalyticsPage