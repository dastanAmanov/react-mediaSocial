import './TopBar.scss'
import { Link } from 'react-router-dom';

// import icon
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

// import img
import profilePicture from '../../Assets/person/1.jpeg'

const TopBar = () => {
    return(
        <div className="topbar-container">
            <div className="topbar-left">
                <Link to='/'><span className="logo">mediasocial</span></Link>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <SearchIcon className='search-icon'/>
                    <input type="text" className="search-input" placeholder='Search for friend, post or video' />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icons-item">
                        <PersonIcon/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icons-item">
                        <ChatIcon/>
                        <span className="topbar-icon-badge">2</span>
                    </div>
                    <div className="topbar-icons-item">
                        <NotificationsIcon/>
                        <span className="topbar-icon-badge">3</span>
                    </div>
                </div>
                <img src={profilePicture} alt="" className="topbar-img" width="32" />
            </div>
        </div>
    )
}

export default TopBar