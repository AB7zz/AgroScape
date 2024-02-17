import React from 'react'
import { useUserContext } from '../../context/UserContext'

const Reply = ({id, comments, users, comment, left, setLeft}) => {
    const [reply, setReply] = React.useState('')
    const [added, setAddReply] = React.useState(false)
    const { addComment } = useUserContext()
    const handleAddReply = () => {
        setAddReply(true)
    }
    const handleReply = () => {
        addComment(id, comment._id, reply)
    }
    return (
        <div className={`ml-[${left}px]`}>
            {comments.filter(c => c.from == comment._id).map(r => 
                {
                    return (
                        <div key={r._id} className='my-3'>
                            <div className='flex items-center'>
                                <i className="fa-solid fa-user"></i>
                                <h1 className='feather ml-2 font-semibold'>{users.find(user => user._id == r.userId)?.name}</h1>
                            </div>
                            <p className='feather mt-2 text-gray-500'>{r.comment}</p>
                            {added ? 
                                <div className='mt-10 flex'>
                                    <input type="text" onChange={e => setReply(e.target.value)} className='feather w-full px-3 py-1 rounded-[40px] border' placeholder='Write your reply...' />
                                    <button onClick={handleReply} className='ml-2 bg-[#16A637] rounded-[50%] px-2'>
                                        <i className="fa-solid fa-paper-plane text-white"></i>
                                    </button>
                                </div>
                                :
                                    <p onClick={handleAddReply} className='feather text-blue-500 mt-2'>Reply</p>
                            }
                            <Reply left={left+20} setLeft={setLeft} comments={comments} users={users} comment={r} />
                        </div>
                    )
                }
            )}
        </div>
    )
}

const Comment = ({id, comment, comments, users}) => {
    const [left, setLeft] = React.useState(10)
    const [reply, setReply] = React.useState('')
    const [added, setAddReply] = React.useState(false)
    const { addComment } = useUserContext()
    const handleAddReply = () => {
        setAddReply(true)
    }
    const handleReply = () => {
        addComment(id, comment._id, reply)
    }
    if(comment.from == 0){
        return(
            <div key={comment.id} className='my-3'>
                <div className='flex items-center'>
                    <i className="fa-solid fa-user"></i>
                    <h1 className='feather ml-2 font-semibold'>{users.find(user => user._id == comment.userId)?.name}</h1>
                </div>
                <p className='feather mt-2 text-gray-500'>{comment.comment}</p>
                {added ? 
                <div className='mt-10 flex'>
                    <input type="text" onChange={e => setReply(e.target.value)} className='feather w-full px-3 py-1 rounded-[40px] border' placeholder='Write your reply...' />
                    <button onClick={handleReply} className='ml-2 bg-[#16A637] rounded-[50%] px-2'>
                        <i className="fa-solid fa-paper-plane text-white"></i>
                    </button>
                </div>
                :
                    <p onClick={handleAddReply} className='feather text-blue-500 mt-2'>Reply</p>
                }
                <Reply id={id} left={left} setLeft={setLeft} comments={comments} users={users} comment={comment} />
            </div>
        )
    }
}

const ForumDetails = ({ id, title, desc, comments }) => {
    const [comment, setComment] = React.useState()
    const { users, addComment, fetchUsers } = useUserContext()
    React.useEffect(() => {
        fetchUsers()
    }, [])
    const handleComment = () => {
        addComment(id, 0, comment)
    }
  return (
    <div className='px-5 py-5'>
        <h1 className='feather font-bold text-3xl'>{title}</h1>
        <p className='feather text-gray-500 my-5'>{desc}</p>
        <div className='flex items-center'>
            <i className="fa-solid fa-comment mr-1"></i>
            <h1 className='feather text-zinc-500 font-semibold'>{comments.length > 1 ? `${comments.length} comments` : `${comments.length} comment`}</h1>
        </div>

        <div className='mt-10 flex'>
            <input type="text" onChange={e => setComment(e.target.value)} className='feather w-full px-3 py-1 rounded-[40px] border' placeholder='Write your comment...' />
            <button onClick={handleComment} className='ml-2 bg-[#16A637] rounded-[50%] px-2'>
                <i className="fa-solid fa-paper-plane text-white"></i>
            </button>
        </div>

        <div className='my-5'>
            {users && comments.map(comment => 
            {
                return (
                    <Comment key={comment._id} id={id} comment={comment} comments={comments} users={users} />
                )
            }
            )}
        </div>
        
    </div>
  )
}

export default ForumDetails