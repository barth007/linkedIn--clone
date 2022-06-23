import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widget() {
    //returning some jsx
    const newsArticle =(heading, subtitle) => (
        <div className='widget__article'>
            <div className='widget__articleLeft'>
                <FiberManualRecord/>
            </div>
            <div className='widget__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className='widget'>
        <div className='widget__header'>
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        {newsArticle ("PAPA React is back", "Topnews- 9099 readers")}
        {newsArticle ("Azure Well-Architected Framework", "Technology News- 9099 readers")}
        {newsArticle ("Terra Co-Founder Lost Nearly All His Wealth in Wipeout, WSJ Says", "Crypto News- 3000 readers")}



    </div>
  )
}

export default Widget