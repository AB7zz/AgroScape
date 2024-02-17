import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Orders/Card'

const Orders = () => {
  const { fetchOrders, orders } = useUserContext()
  React.useEffect(() => {
    fetchOrders()
  }, [])
  return (
    <div className='mb-20'>
      {orders && orders.map(order => (
        <Card key={order._id} order={order} />
      ))}
    </div>
  )
}

export default Orders