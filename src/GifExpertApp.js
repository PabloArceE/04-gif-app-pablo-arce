// rfcp react function component

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Super Ultra Instinct']);

  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        <ul>
            {
                categories.map( category => { 
                    return (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                })
            }
        </ul>
    </>
  )  
}
