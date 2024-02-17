import React from 'react'
import { useUserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'

const ForumCard = () => {
    const { forums, comments } = useUserContext()
  return (
    <div className=''>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl w-[50%] text-red-500 font-semibold'>Hottest topic of today!</h1>
            <Link to='/forums' className='font-semibold text-blue-500 text-xl'>View more</Link>
        </div>
        {forums && 
        <Link to='/forum/0'>
            <div className='my-5 shadow-xl rounded-[15px] px-5 py-2'>
                <h1 className='font-bold text-xl'>{forums[0].title}</h1>
                <p className='my-3 text-gray-500'>{forums[0].desc.slice(0,100)}...</p>
                <h3 className=' text-center text-blue-500 font-semibold text-lg'>View more..</h3>
            </div>
        </Link>}
    </div>
  )
}

export default ForumCard