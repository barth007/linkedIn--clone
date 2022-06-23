import React from 'react';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchTab from '../Search/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from "../../features/userSlice";
import { auth } from '../../firebase';

function Header() {
  const user=useSelector(selectUser);
  const dispatch =useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();

  }

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
      <HeaderOption avatar={true} title="Me" onClick={logoutOfApp}/>





    </div>
    </div>
  )
}

export default Header