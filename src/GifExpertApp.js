// rfcp react function component

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

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
                            category={category}
                            key={category} 
                        />
                    )
                })
            }
        </ul>
    </>
  )  
}
