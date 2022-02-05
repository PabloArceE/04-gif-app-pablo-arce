
import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';
// import PropTypes from 'prop-types';

const GifGrid = ({category}) => {
  
  const [gifArr, setGifArr] = useState([]);

  useEffect(() => {
    getGifs(category)
  },[]);

  const getGifs = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=hgit179rFzmU7Wn20VN6lexxbc8nBQyi&q=${category}]&limit=9`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    

    const gifs = data.map( (gif) => {
     
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
      }
    });
    
    setGifArr(gifs)  
    
  }; 

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
