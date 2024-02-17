import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Marketplace/Card'

const MarketPlace = () => {
  const { fetchMarketplace, marketItems } = useUserContext()
  React.useEffect(() => {
    fetchMarketplace()
  }, [])
  return (
    <div className='mb-20 px-5'>
      <div className='grid grid-cols-2'>
        {marketItems && marketItems.map(item => (
          <Card key={item._id} id={item._id} img={item.img} name={item.name} price={item.price} quant={item.quantity} />
        ))}
      </div>
    </div>
  )
}

export default MarketPlace