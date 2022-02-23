import './Profile.scss'
import { useParams } from 'react-router-dom'

import TopBar from '../../Components/Topbar/TopBar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
import {Users } from '../../Data/dummyData'

// import img
import profileCover from "../../Assets/post/3.jpeg"

const Profile = () => {

    let { username } = useParams()

  return (
    <>
        <TopBar/>
        <div className="profile">
            <Sidebar/>
            <div className="profile-right">
                {
                    Users.filter(f => f.username === username).map(user => {
                        return (
                            <div key={user.id} className="profile-right-top">
                                <div className="profile-cover">
                                    <img className='profile-cover-img' src={profileCover} alt="" />
                                    <img className='profile-user-img' src={user.profilePicture} alt="" />
                                </div>    
                                <div className="profile-info">
                                    <h4 className="profile-info-name">{user.username}</h4>
                                    <span className="profile-info-desc">Hello my friends!</span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="profile-right-bottom">
                    <Feed />
                    <Rightbar profile /> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile