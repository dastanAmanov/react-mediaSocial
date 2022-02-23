import './Rightbar.scss'
import { useParams } from 'react-router-dom'

import Online from './Online/Online'
import { Users } from '../../Data/dummyData'

// import img
import gif from "../../Assets/gift.png"
import ad from "../../Assets/ad.png"
import followImg from "../../Assets/person/1.jpeg" 
import followImg2 from "../../Assets/person/2.jpeg" 
import followImg3 from "../../Assets/person/3.jpeg" 
import followImg4 from "../../Assets/person/4.jpeg" 
import followImg5 from "../../Assets/person/5.jpeg" 
import followImg6 from "../../Assets/person/6.jpeg" 

const Rightbar = ({profile}) => {

  let { username } = useParams()

  let HomeRightbar = () => {
    return (
      <>
      <div className="brithday-container">
          <img className='brithday-img' src={gif} width='50' alt="" />
          <span className="brithday-text">
            <b>Polo Foster</b> and <b> 3 other friends have a brithday today</b>
          </span>
        </div>
        <img className='rightbar-ad' src={ad} alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friends-list">
          {
            Users.map(u => {
              return <Online key={u.id} user={u} />
            })
          }
        </ul>
      </>
    )
  }
  let ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbar-titles'>User information</h4>
      {
        Users.filter(f => f.username === username).map(item => {
          return (
            <div key={item.id} className="rightbar-info">
              <div className="rightbar-info-item">
                <span className="rightbar-info-key">City:</span>
                <span className="rightbar-info-value">{item.city}</span>
              </div>
              <div className="rightbar-info-item">
                <span className="rightbar-info-key">From:</span>
                <span className="rightbar-info-value">{item.from}</span>
              </div>
              <div className="rightbar-info-item">
                <span className="rightbar-info-key">Relationship:</span>
                <span className="rightbar-info-value">{item.relationship}</span>
              </div>
            </div>
          )
        })
      }
      <h4 className="rightbar-titles">User friends</h4>
      <div className="rightbar-followings">
        <div 
          className="rightbar-following">
          <img className="rightbar-following-img" 
          src={followImg}
          width='100'
          alt="" />
          <span className="rightbar-following-name">Jhon Carter</span>
        </div>
        <div 
          className="rightbar-following">
          <img className="rightbar-following-img" 
          src={followImg2}
          width='100'
          alt="" />
          <span className="rightbar-following-name">Jhon Carter</span>
        </div>
        <div 
          className="rightbar-following">
          <img className="rightbar-following-img" 
          src={followImg3} 
          width='100'
          alt="" />
          <span className="rightbar-following-name">Jhon Carter</span>
        </div>
        <div 
          className="rightbar-following">
          <img className="rightbar-following-img" 
          src={followImg4}
          width='100'
          alt="" />
          <span className="rightbar-following-name">Jhon Carter</span>
        </div>
        <div 
          className="rightbar-following">
          <img className="rightbar-following-img" 
          src={followImg5} 
          width='100'
          alt="" />
          <span className="rightbar-following-name">Jhon Carter</span>
        </div>
        <div 
          className="rightbar-following">
          <img className="rightbar-following-img" 
          src={followImg6} 
          width='100'
          alt="" />
          <span className="rightbar-following-name">Jhon Carter</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar