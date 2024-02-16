import React from 'react'
import BotNav from '../components/Home/BotNav'
import TopNav from '../components/Home/TopNav'
import MarketCard from '../components/Home/MarketCard'
import ForumCard from '../components/Home/ForumCard'

const Home = () => {
  return (
    <div>
      <TopNav />
      <div className='px-5 py-5'>
        <ForumCard />
        <MarketCard />
      </div>
      <BotNav />
    </div>
  )
}

export default Home