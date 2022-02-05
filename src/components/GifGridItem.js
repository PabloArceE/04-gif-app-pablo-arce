import React from 'react';
// import PropTypes from 'prop-types';

const GifGridItem = ({url, title}) => {    
    
  return (
    <div className='card-item'>
       <img src={url} alt={title} className='card-img'/> 
       <h3 className='card-title'>{title}</h3>
    </div>
  ) 
};

// GifGridItem.propTypes = {};

export default GifGridItem;
