import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';


function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem =(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>        
 <div className='sidebar__top'>
    <img src='https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80' alt=''/>
    <Avatar src={user.photoURL} className='sidebar__avatar'>
        {/* if the user as no url photo then use the first character of the email */}
        {user.email[0]}
    </Avatar>
    <h2>{user.displayName}</h2>
    <h4>{user.email}</h4>
    </div>
    <div className='sidebar__stats'>
        <div className='sidebar__stat'>
        <p>who viewed you</p>
        <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,448</p>
        </div>
       
    </div>
    <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('Reactjs')}
            {recentItem('Programming')}
            {recentItem('Software Engineering')}
            {recentItem('Designing')}
        </div>
        </div>
  )
}

export default Sidebar