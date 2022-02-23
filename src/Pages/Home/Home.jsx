import './Home.scss'
import React from 'react'

import TopBar from '../../Components/Topbar/TopBar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'

const Home = () => {
  return (
    <>
    <TopBar/>
    <div className="home-container">
    <Sidebar/>
    <Feed />
    <Rightbar/> 
    </div>
    </>
  )
}

export default Home