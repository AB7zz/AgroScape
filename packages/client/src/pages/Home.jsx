import React from 'react'
import BotNav from '../components/Home/BotNav'
import TopNav from '../components/Home/TopNav'
import MarketCard from '../components/Home/MarketCard'
import ForumCard from '../components/Home/ForumCard'
import { useUserContext } from '../context/UserContext'
import GameCard from '../components/Home/GameCard'

const Home = () => {
  const { fetchMarketplace, fetchForums, fetchProfile } = useUserContext()
  React.useEffect(() => {
    if(localStorage.getItem('token') == null){
      window.location.href = '/login'
    }
    fetchMarketplace()
    fetchForums()
    fetchProfile()
  }, [])
  return (
    <div>
      {/* <TopNav /> */}
      <div className='px-5 py-5'>
        <GameCard />
        <ForumCard />
        <MarketCard />
      </div>
      {/* <BotNav /> */}
    </div>
  )
}

export default Home