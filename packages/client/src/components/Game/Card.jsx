import React from 'react'
import { useUserContext } from '../../context/UserContext'

const Card = ({plant, setStep}) => {
    const { plantChosen } = useUserContext()
  return (
    <div onClick={() => plantChosen(setStep)} className='px-3 py-5 flex flex-col shadow-xl rounded-[15px] h-[225px]'>
        <img src={plant.img} alt="plant" />
        <h1 className='text-center font-bold text-2xl mt-auto'>{plant.name}</h1>
    </div>
  )
}

export default Card