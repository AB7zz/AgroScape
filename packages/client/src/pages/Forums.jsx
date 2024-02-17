import React from 'react'
import { useUserContext } from '../context/UserContext'
import Card from '../components/Forums/Card'

const Forums = () => {
  const { forums } = useUserContext()
  return (
    <div>
      {forums && forums.map(forum => 
        <Card key={forum.id} id={forum.id} title={forum.title} desc={forum.desc} cLength={forum.comments.length} />
      )}
    </div>
  )
}

export default Forums