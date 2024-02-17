import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Cart/Card'

const Cart = () => {
  const { fetchCart, cart, Checkout } = useUserContext()
  React.useEffect(() => {
    fetchCart()
  }, [])

  return (
    <div className='mb-20'>
      {cart && cart.map(item => (
        <Card key={item._id} item={item} />
      ))}
      <div className='flex justify-center'>
        <button onClick={Checkout} className='bg-black text-white w-1/2 m-auto py-2 rounded shadow-xl'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart