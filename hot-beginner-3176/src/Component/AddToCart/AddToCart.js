import React from 'react'
import "./AddToCart";
import Cards from './Cards';

import list from './data';

const AddToCart = ({handleClick}) => {
  return (
    <section>
      {
        list.map((item)=>(
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))
      }
    </section>
  )
}

export default AddToCart