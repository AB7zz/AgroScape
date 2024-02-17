import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const LoginCard = () => {
    const { Login, authError } = useAuthContext()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  return (
    <div className='flex flex-col'>
      <div className='bg-white rounded-[10px] px-5 py-10 flex flex-col md:w-[500px]'>
          {authError.error && <p className='text-red-500'>{authError.message}</p>}
          <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Enter email' className='border border-1 pl-2 py-1 my-3' />
          <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter password' className='border border-1 pl-2 py-1 my-3' />
          <button onClick={() => Login(email, password)} className='bg-green-400 hover:bg-green-500 text-white rounded px-3 py-1 mt-5'>Login</button>
      </div>
      <p className='text-black'>Don't have an account? <Link to='/signup' className='text-green-500'>Sign up</Link> </p>
    </div>
  )
}

export default LoginCard