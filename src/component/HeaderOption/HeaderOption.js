import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './HeaderOption.css';

function HeaderOption({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
        {/* this will render the icon if we pass in the icon props that's what the && is for */}
        {Icon && <Icon className='headerOption__icon'/> }
        {/* if i pass an  avatar then go ahead and do the following */}
        {avatar &&(
            <Avatar className='headerOption__icon'>
                            {user?.email[0]} 

            </Avatar>
        )}
        <h3 className='headerOption__title'>{title}</h3>

    </div>
  )
}

export default HeaderOption