
import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
// import PropTypes from 'prop-types';

const GifGrid = ({category}) => {
  
  const [gifArr, setGifArr] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(setGifArr)
  },[category]);
  

  return (
    <>
        <h2>{category}</h2>
       
          <div className='card-container'>
            {
              gifArr.map( gif =>
                <GifGridItem
                  key={gif.id}
                  {...gif}
                />
              )
            }
          </div>        
        
    </>
)
};

// GifGrid.propTypes = {};

export default GifGrid;
