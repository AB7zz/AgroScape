import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const SignupCard = () => {
    const { createForum, authError } = useAuthContext()
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
  return (
    <div className='flex flex-col'>
      <div className='bg-white rounded-[10px] px-5 py-10 flex flex-col md:w-[500px]'>
          {authError.error && <p className='text-red-500'>{authError.message}</p>}
          <input onChange={e => setTitle(e.target.value)} type="text" placeholder='Enter title' className='feather border border-1 pl-2 py-1 my-3' />
          <textarea onChange={e => setDesc(e.target.value)} type="text" placeholder='Enter description' className='feather border border-1 pl-2 py-1 my-3' />
          <button onClick={() => createForum(title, desc)} className='feather bg-green-400 hover:bg-green-500 text-white rounded px-3 py-1 mt-5'>Create</button>
      </div>
    </div>
  )
}

export default SignupCard