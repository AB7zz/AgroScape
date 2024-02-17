import React from 'react'
import { useUserContext } from '../../context/UserContext'

const TopNav = () => {
  const { profile } = useUserContext()
  return (
    <div className='bg-[#16A637] py-0 flex items-center z-20 relative'>
        <img src="/agroscape.png" className='w-16' />
        <div className='flex ml-7'>
          <span className='feather ml-[-30px] text-center text-white font-bold text-3xl'>agro</span><span className='feather text-zinc-800 font-bold text-3xl'>scape</span>
        </div>
        <div className='ml-28'>
          <i class="fa-solid fa-bolt-lightning text-[#F1FF05]"></i>
          <span className='feather text-xl font-bold text-white ml-2'>{profile.day*profile.day*10}</span>
        </div>
    </div>
  )
}

export default TopNav