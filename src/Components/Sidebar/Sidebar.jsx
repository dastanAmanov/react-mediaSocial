import './Sidebar.scss'

import CloseFriend from './CloseFriend/CloseFriend';

import { Users } from '../../Data/dummyData'

// import icon
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeedIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Feed</span>
          </li>
          <li className="sidebar-list-item">
            <ChatIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Chats</span>
          </li>
          <li className="sidebar-list-item">
            <PlayCircleIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Videos</span>
          </li>
          <li className="sidebar-list-item">
            <GroupIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Groups</span>
          </li>
          <li className="sidebar-list-item">
            <BookmarksIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <EventIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Events</span>
          </li>
          <li className="sidebar-list-item">
            <SchoolIcon className='sidebar-icon' />
            <span className='sidebar-list-item-text'>Coursers</span>
          </li>
        </ul>
        <button className='sidebar-btn'>Showe more</button>
        <hr className='sidebar-hr' />
        <ul className="sidebar-friend-list">
          {
            Users.map(u => {
            return <CloseFriend key={u.id} user={u} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar