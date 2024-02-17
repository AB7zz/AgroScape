import React from 'react'
import { Link } from 'react-router-dom'

const BotNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white dark:bg-gray-300 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
            <Link to='/'>
                <button className="mt-2 inline-flex flex-col items-center justify-center px-5 group">
                    <svg className="w-5 h-5 mb-2 text-[#53BE28] dark:text-[#53BE28] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span className="text-sm text-[#53BE28] dark:text-[#53BE28] ">Home</span>
                </button>
            </Link>
            <Link to='/game' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-gamepad text-[#53BE28]"></i>
                <span className="text-sm text-[#53BE28] dark:text-[#53BE28] ">Game</span>
            </Link>
            <Link to='/forums' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-people-group text-[#53BE28]"></i>
                <span className="text-sm text-[#53BE28] dark:text-[#53BE28] ">Forum</span>
            </Link>
            <Link to='/marketplace' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-store text-[#53BE28]"></i>
                <span className="text-sm text-[#53BE28] dark:text-[#53BE28] ">Marketplace</span>
            </Link>
            <Link to='/profile' className="inline-flex flex-col items-center justify-center px-5 group">
                <i className="fa-solid fa-user text-[#53BE28]"></i>
                <span className="text-sm text-[#53BE28] dark:text-[#53BE28] ">Profile</span>
            </Link>
        </div>
    </div>
  )
}

export default BotNav