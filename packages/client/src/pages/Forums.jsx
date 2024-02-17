import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Forums/Card'

const Forums = () => {
  const { forums, fetchForums } = useUserContext()
  React.useEffect(() => {
    fetchForums()
  }, [])
  return (
    <div className='mb-20 px-5'>
      {forums && forums.map(forum => 
        <Card key={forum._id} id={forum._id} title={forum.title} desc={forum.desc} cLength={forum.comments.length} />
      )}
    </div>
  )
}

export default Forums