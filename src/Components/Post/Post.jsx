import './Post.scss'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Users } from '../../Data/dummyData'

// import icon
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import img
import iconImg from "../../Assets/like.png" 
import iconImg2 from "../../Assets/heart.png"

const Post = ({post}) => {
    let [like, setLike] = useState(post.like)
    let [isLiked, setIsLiked] = useState(false)

    let likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img className='post-profile-img' src={Users.filter(u => u.id === post?.userId)[0].profilePicture} width='50' alt="" />
                    <Link to={`/profile/${Users.filter(u => u.id === post?.userId)[0].username}`}>
                        <span 
                            className="post-username">
                            {Users.filter(u => u.id === post?.userId)[0].username}
                        </span>
                    </Link>
                    <span className="post-date">{post.date}</span>
                </div>
                <div className="post-top-right">
                    < MoreVertIcon className='post-icon' />
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">{post?.desc}</span>
                <img className="post-img" src={post.photo} alt="" />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <img onClick={likeHandler}
                        className='like-icon' 
                        src={iconImg}
                        alt="" />
                        <img onClick={likeHandler}
                        className='like-icon' 
                        src={iconImg2} 
                        alt="" />
                    <span className="post-like-counter">{like} people like it</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment-text">{post.comment} commemts</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post