import React from 'react'
import "./RecipeTile.css";

export default function RecipeTile({recipe}) {
  recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
  return (
    
    
             <div className='recipeTile'>
                <img className='recipeTile_img' src={recipe["recipe"]["image"]} />
                <p className='recipeTile_name'>{recipe["recipe"]["label"]}</p>
            </div>
    
  );
}
