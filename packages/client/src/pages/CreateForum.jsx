import React from 'react'
import CreateCard from '../components/CreateForum/CreateCard'

const CreateForum = () => {
  React.useEffect(() => {
    if(!localStorage.getItem('token')){
      window.location.replace('/')
    }
  })
  return (
    <div className='py-10'>
        <h1 className='feather text-2xl font-semibold text-black text-center'>Create Forum</h1>
        <div className='flex justify-center my-10'>
          <CreateCard />
        </div>
    </div>
  )
}

export default CreateForum