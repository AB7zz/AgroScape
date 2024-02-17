import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'
import Card from '../Marketplace/Card'

const MarketCard = () => {
    const { marketItems } = useUserContext()
  return (
    <div className='mb-20'>
        <div className='flex w-full justify-between align-center'>
            <h1 className='font-semibold text-black text-2xl'>Marketplace</h1>
            <Link to='/marketplace' className='text-xl text-blue-500 font-semibold'>View more</Link>
        </div>
        <div className='grid grid-cols-2 gap-5'>
            {marketItems && marketItems.slice(0, 4).map(item => 
                <Card key={item._id} id={item._id} img={item.img} name={item.name} price={item.price} quant={item.quantity} />
            )}
        </div>
    </div>
  )
}

export default MarketCard