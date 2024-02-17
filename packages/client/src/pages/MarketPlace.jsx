import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Marketplace/Card'

const MarketPlace = () => {
  const { fetchMarketplace, marketItems } = useUserContext()
  React.useEffect(() => {
    fetchMarketplace()
  }, [])
  return (
    <div className='mb-20'>
      <div className='grid grid-cols-2'>
        {marketItems && marketItems.map(item => (
          <Card key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} quant={item.quant} />
        ))}
      </div>
    </div>
  )
}

export default MarketPlace