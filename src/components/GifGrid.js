
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

  const {data:gifArr, loading} = useFetchGifs(category);
  
  return (
    <>
        <h2>{category}</h2>

        {loading && <p>Loading...</p>}
       
          <div className='card-container animate__animated animate__fadeIn'>
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
