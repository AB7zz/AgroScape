import React from 'react'
import { useUserContext } from '../../context/UserContext'

const Card = ({id, name, price, quant, image}) => {
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

export default Card