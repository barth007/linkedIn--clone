import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';


function Sidebar() {
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
    <Avatar className='sidebar__avatar'/>
    <h2>Bartholomew Bassey</h2>
    <h4>barthbassey@gmail.com</h4>
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