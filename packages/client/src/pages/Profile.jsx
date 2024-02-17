import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'


const Profile = () => {
  const { Logout } = useAuthContext()
  return (
    <div className='py-0 mb-20'>
      <div className='flex flex-col'>
          <Link to='/cart' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/cart' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Cart</p>
          </Link>
          <Link to='/orders' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/orders' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Orders</p>
          </Link>
          <Link to='/game' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/game' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Game</p>
          </Link>
          <Link to='/steps' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/steps' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Step by Step</p>
          </Link>
          <Link to='/forums' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/forums' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Forums</p>
          </Link>
          <Link to='/marketplace' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/marketplace' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Marketplace</p>
          </Link>
          <Link to='/create' className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p to='/marketplace' className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Start Forum</p>
          </Link>
          <Link onClick={Logout} className='bg-[#E9E9E9] px-5 py-10 flex drop-shadow-2xl'>
              <p className='feather text-center m-auto font-semibold text-[#707070] text-xl nunito'>Log out</p>
          </Link>
      </div>
    </div>
  )
}

export default Profile