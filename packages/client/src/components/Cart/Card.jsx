import React from 'react'

const Card = ({item}) => {
  return (
    <div className='px-5 py-2'>
        <div className='shadow-xl flex justify-between rounded p-5 mb-5'>
            <div>
                <img src={item.image} alt={item.name} className='w-20 h-20' />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>{item.name}</h1>
                <h1 className='text-xl font-semibold'>₹ {item.price}</h1>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Qty: {item.quant}</h1>
            </div>
        </div>
    </div>
  )
}

export default Card