import './Online.scss'
import { Link } from 'react-router-dom'

const Online = ({user}) => {
  return (
    <Link to={`/profile/${user.username}`}>
      <li className="rightbar-friends">
        <div className="rightbar-img-container">
          <img className="rightbar-profile-img" src={user.profilePicture} width='50' alt=""  />
          <span className='rightbar-online'></span>
        </div>
        <span className="rightbar-username">{user.username}</span>
      </li>
    </Link>
  )
}

export default Online