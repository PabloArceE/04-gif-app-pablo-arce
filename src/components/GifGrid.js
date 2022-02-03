
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

  useEffect(() => {
    getGifs(category)
  },[]);

  const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=hgit179rFzmU7Wn20VN6lexxbc8nBQyi&q=${category}]&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });
    
    console.log(gifs)

    
    
  }; 

  return (
    <>
        <h3>{category}</h3>
        
    </>
)
};

// GifGrid.propTypes = {};

export default GifGrid;
