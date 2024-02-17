import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';


const GameCard = () => {
  return (
    <Link to='/game'>
        <div className='rounded-[15px] h-[100px] bg-white custom-shadow-1 mb-10 px-5'>
            <div className='flex'>
                <Player
                    autoplay
                    loop
                    src={`/plant.json`}
                    className='absolute left-[20px]'
                    style={{ height: '100px', width: '100px' }}
                    >
                    <Controls />
                </Player>
                <h3 className='ml-[90px] !font-extrabold text-xl mt-3 feather text-zinc-800'>Day <span className='text-[#16A637]'>0</span></h3>
            </div>
            <p className='ml-[90px] mt-2 text-zinc-500 feather'>Plant your first sapling!</p>
        </div>
    </Link>
  )
}

export default GameCard