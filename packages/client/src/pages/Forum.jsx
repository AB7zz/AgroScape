import React from 'react'
import { useParams } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import ForumDetails from '../components/Forum/ForumDetails';

const Forum = () => {
  const { id } = useParams()
  const { fetchForum, forum } = useUserContext()

  React.useEffect(() => {
    fetchForum(id)
  }, [])
  return (
    <div>
      {forum && <ForumDetails id={id} title={forum.title} desc={forum.desc} comments={forum.comments} />}
    </div>
  )
}

export default Forum