// rfcp react function component

import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory setCategories={ setCategories }/>
        <hr/>

        <ol>
            {
                categories.map( category => { 
                    return <li key={category}> {category} </li>
                })
            }
        </ol>
    </>
  )  
}
