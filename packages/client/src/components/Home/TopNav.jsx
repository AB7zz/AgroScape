import React from 'react'

const TopNav = () => {
  return (
    <div className='bg-[#53BE28] py-5 flex items-center'>
        <img src="/agroscape.png" className='w-16' />
        <div className='flex justify-center w-full'>
          <span className='ml-[-30px] text-center text-white font-bold text-3xl'>Agro</span><span className='text-zinc-800 font-bold text-3xl'>Scape</span>
        </div>
    </div>
  )
}

export default TopNav