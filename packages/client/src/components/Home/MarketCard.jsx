import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'

const Card = ({id, image, name, price, quant}) => {
    const [added, setAdded] = React.useState(false)
    const { addToCart } = useUserContext()
    const [selQuant, setQuant] = React.useState(1)
    const handleAddToCart = (id) => {
        setAdded(true)
        addToCart(id, selQuant)
    }
    const handleDec = () => {
        if(selQuant === 1) return
        setQuant(prev => prev - 1)
    }
    const handleInc = () => {
        if(selQuant === quant) return alert('You cannot add more than available')
        setQuant(prev => prev + 1)
    }
    return(
        <div className='my-3 shadow-xl rounded px-2 py-2'>
            <div key={id} className="flex flex-col">
                <img src={image} className="w-full" />
                <h1 className="font-semibold text-black">{name}</h1>
                <h1 className="text-gray-500">₹ {price}</h1>
                <div className='grid grid-cols-3'>
                    <button className='bg-gray-300 rounded-tl rounded-bl' onClick={handleDec}>-</button>
                    <button>{selQuant}</button>
                    <button className='bg-gray-300 rounded-tr rounded-br' onClick={handleInc}>+</button>
                </div>
                {added ? 
                <button onClick={handleAddToCart} className="bg-zinc-700 mt-2 text-white rounded-md px-2 py-1">View Cart</button>
                :
                <button onClick={handleAddToCart} className="bg-black mt-2 text-white rounded-md px-2 py-1">Add to cart</button>}
            </div>
        </div>
    )
}

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
                <Card key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} quant={item.quant} />
            )}
        </div>
    </div>
  )
}

export default MarketCard