import React from 'react'
import { Link } from 'react-router-dom'

const BotNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white dark:bg-white border-[0.05px] dark:border-t-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
            <Link to='/' className="inline-flex flex-col items-center justify-center px-5 group">
                <i class="fa-solid fa-house text-[#16A637]"></i>
            </Link>
            <Link to='/game' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-gamepad text-[#16A637]"></i>
                {/* <span className="text-sm text-[#16A637] dark:text-[#16A637] ">Game</span> */}
            </Link>
            <Link to='/forums' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-people-group text-[#16A637]"></i>
                {/* <span className="text-sm text-[#16A637] dark:text-[#16A637] ">Forum</span> */}
            </Link>
            <Link to='/marketplace' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-store text-[#16A637]"></i>
                {/* <span className="text-sm text-[#16A637] dark:text-[#16A637] ">Marketplace</span> */}
            </Link>
            <Link to='/profile' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-user text-[#16A637]"></i>
                {/* <span className="text-sm text-[#16A637] dark:text-[#16A637] ">Profile</span> */}
            </Link>
        </div>
    </div>
  )
}

export default BotNav