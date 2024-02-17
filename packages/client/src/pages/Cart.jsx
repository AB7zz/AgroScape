import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Cart/Card'

const Cart = () => {
  const { fetchCart, fetchMarketplace, marketItems, cart, Checkout } = useUserContext()
  React.useEffect(() => {
    fetchCart()
    fetchMarketplace()
  }, [])

  return (
    <div className='mb-20'>
      {cart && marketItems && cart.map(item => (
        <Card key={item._id} item={item} img={marketItems.find(m => m._id == item.itemId)?.img} name={marketItems.find(m => m._id == item.itemId)?.name} price={marketItems.find(m => m._id == item.itemId)?.price} />
      ))}
      <div className='flex justify-center'>
        <button onClick={Checkout} className='bg-black text-white w-1/2 m-auto py-2 rounded shadow-xl'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart