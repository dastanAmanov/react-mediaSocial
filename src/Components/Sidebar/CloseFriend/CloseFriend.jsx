import './CloseFriend.scss'
import {Link } from 'react-router-dom'


const CloseFriend = ({user}) => {
  return (
    <Link to={`/profile/${user.username}`}>
    <li className="friend-sidebar">
        <img className='sidebar-friend-img' src={user.profilePicture} width='50' alt="" />
        <span className='sidebar-friend-name'>{user.username}</span>
    </li>
    </Link>
  )
}

export default CloseFriend