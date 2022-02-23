import './Feed.scss'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { Posts } from '../../Data/dummyData'

const Feed = ({profile}) => {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share/>
        {
          Posts.map(item => (
            <Post key={item.id} post={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Feed