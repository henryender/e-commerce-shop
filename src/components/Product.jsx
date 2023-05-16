import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ product: { image, name, id, price } }) => {
  
  return (
    <div>
    <Link to={`productpage/${id}`}>

      <div className="product-card">
        <img 
          src={image && image}
          width={250}
          height={250}
          className="product-image"
          alt=""
        />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>

    </Link>

  </div>
  )
}

export default Product
