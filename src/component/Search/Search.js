import React from 'react';
import './Search.css';
import Search from '@mui/icons-material/Search';

function SearchTab() {
  return (
    <div className='header__search'>
    <Search/>
    <input placeholder="Search" type="text"/>
    </div>
  )
}

export default SearchTab