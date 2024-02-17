import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Orders/Card'

const Orders = () => {
  const { fetchOrders, orders, marketItems, fetchMarketplace } = useUserContext()
  React.useEffect(() => {
    fetchOrders()
    fetchMarketplace()
  }, [])
  return (
    <div className='mb-20'>
      {marketItems && orders && orders.map(order => (
        <Card key={order._id} order={order} img={marketItems.find(m => m._id == order._id)?.img} name={marketItems.find(m => m._id == order._id)?.name} price={marketItems.find(m => m._id == order._id)?.price} />
      ))}
    </div>
  )
}

export default Orders