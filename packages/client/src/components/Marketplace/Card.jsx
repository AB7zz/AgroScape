import React from 'react'
import { useUserContext } from '../../context/UserContext'

const Card = ({id, name, price, quant, img}) => {
    const [added, setAdded] = React.useState(false)
    const { addToCart, cart } = useUserContext()
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
                <img src={img} className="w-full" />
                <h1 className="feather font-semibold text-black">{name}</h1>
                <h1 className="feather text-gray-500">₹ {price}</h1>
                <div className='grid grid-cols-3'>
                    <button className='feather bg-gray-300 rounded-tl rounded-bl' onClick={handleDec}>-</button>
                    <button className='feather'>{selQuant}</button>
                    <button className='feather bg-gray-300 rounded-tr rounded-br' onClick={handleInc}>+</button>
                </div>
                {(added || cart.some(item => item._id === id)) ? 
                <button onClick={() => handleAddToCart(id)} className="feather bg-zinc-700 mt-2 text-white rounded-md px-2 py-1">View Cart</button>
                :
                <button onClick={() => handleAddToCart(id)} className="feather bg-black mt-2 text-white rounded-md px-2 py-1">Add to cart</button>}
            </div>
        </div>
    )
}

export default Card