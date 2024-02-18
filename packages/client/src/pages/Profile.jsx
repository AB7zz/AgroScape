import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'


const Profile = () => {
  const { Logout } = useAuthContext()
  const items = [
    {
        name: 'Cart',
        path: '/cart'
    },
        {
        name: 'Orders',
        path: '/orders'
    },
        {
        name: 'Game',
        path: '/game'
    },
        {
        name: 'Step by Step',
        path: '/steps'
    },
        {
        name: 'Forums',
        path: '/forums'
    },
        {
        name: 'Marketplace',
        path: '/marketplace'
    },
        {
        name: 'Start Forum',
        path: '/create'
    },
    {
        name: 'Leaderboard',
        path: '/leaderboard'
    }
  ]
  return (
    <div className='py-0 mb-20'>
      <div className='flex flex-col'>
        {items.map((item, i) => (
            <Link key={i} to={item.path} className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to={item.path} className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>{item.name}</p>
            </Link>
        ))}
        <button onClick={Logout} className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
          <p className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Logout</p>
        </button>
          
      </div>
    </div>
  )
}

export default Profile