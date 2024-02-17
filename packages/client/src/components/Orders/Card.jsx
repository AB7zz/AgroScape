import React from 'react'

const Card = ({order}) => {
  return (
    <div className='px-5 py-2'>
        <div className='shadow-xl flex justify-between rounded p-5 mb-5'>
            <div>
                <img src={order.img} alt={order.name} className='w-20 h-20' />
            </div>
            <div>
                <h1 className='text-xl font-semibold'>{order.name}</h1>
                <h1 className='text-xl font-semibold'>₹ {order.price}</h1>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Qty: {order.quantity}</h1>
            </div>
        </div>
    </div>
  )
}

export default Card