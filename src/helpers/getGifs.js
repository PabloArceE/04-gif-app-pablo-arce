

 export const getGifs = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=hgit179rFzmU7Wn20VN6lexxbc8nBQyi&q=${encodeURI(category)}]&limit=9`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    

    const gifs = data.map( (gif) => {
     
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
      }
    });
    
    return gifs;    
}; 