import React from 'react'

const TopNav = () => {
  return (
    <div className='bg-[#16A637] py-0 flex items-center z-20 relative'>
        <img src="/agroscape.png" className='w-16' />
        <div className='flex ml-7 w-full'>
          <span className='feather ml-[-30px] text-center text-white font-bold text-3xl'>agro</span><span className='feather text-zinc-800 font-bold text-3xl'>scape</span>
        </div>
    </div>
  )
}

export default TopNav