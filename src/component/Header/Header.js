import React from 'react';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchTab from '../Search/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


import './Header.css';

function Header() {
  return (
    <div  className='header'>
    <div className='header__left'>
        <img src="https://www.freepnglogos.com/uploads/linkedin-in-logo-png-1.png" alt="Linkedin"/>
        <div className='header__search--tab'>
            <SearchTab/>
        </div>
    </div>
    <div className='header__right'>
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption  Icon={SupervisorAccountIcon} title="My Network"/>
      <HeaderOption  Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption  Icon={ChatIcon} title="Messaging"/>
      <HeaderOption  Icon={NotificationsIcon} title="Notification"/>
      <HeaderOption avatar="https://media-exp2.licdn.com/dms/image/C4E03AQHadAGdKjfAFQ/profile-displayphoto-shrink_800_800/0/1627683206307?e=1661385600&v=beta&t=T80GFdy1H1p-0FOmlWn84aG0RS6TYIt2-RhwWYUH3FM" title="Me"/>





    </div>
    </div>
  )
}

export default Header