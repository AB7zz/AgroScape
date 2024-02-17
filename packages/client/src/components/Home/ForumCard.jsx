import React from 'react'
import { useUserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'

const ForumCard = () => {
    const { forums, comments } = useUserContext()
  return (
    <div className=''>
        <div className='flex items-center'>
            <h1 className='feather text-2xl w-[100%] text-red-500 font-semibold ml-3'>Join the community!</h1>
            <Link to='/forums' className='mr-10 feather font-semibold text-blue-500 text-sm'>
                <i class="fa-solid fa-angles-right text-xl"></i>
            </Link>
        </div>
        {forums && 
        <Link to={`/forum/${forums[0]._id}`}>
            <div className='my-5 shadow-xl bg-[#D7FFD8] rounded-[15px] px-5 py-2'>
                <h1 className='feather font-bold text-xl text-[#16A637]'>{forums[0].title}</h1>
                <p className='feather my-3 text-gray-500'>{forums[0].desc.slice(0,100)}...</p>
                <h3 className='feather text-center text-blue-500 font-semibold text-lg'>View more..</h3>
            </div>
        </Link>}
    </div>
  )
}

export default ForumCard