import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, title, desc, cLength }) => {
  return (
    <Link to={`/forum/${id}`}>
        <div className='my-5 shadow-xl rounded-[15px] px-5 py-2'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <p className='my-3 text-gray-500'>{desc.slice(0,100)}...</p>
            <div className='flex justify-evenly'>
                <div className='flex items-center'>
                    <i className="fa-solid fa-comment mr-1"></i>
                    {cLength > 1 ? `View comments` : `View comment`}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Card