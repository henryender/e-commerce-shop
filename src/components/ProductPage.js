import React  from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data'
import ProductDetails from './ProductDetails';




const ProductPage = () => {
    const {id} = useParams();

  return (
    <div >
    {products.filter((x)=>x.id===id).map((product)=><ProductDetails key={product.id} product={product}/>)}
    
      {/* <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Carousel key={item.id} product={item} />
              ))}
            </div>
          </div>
      </div> */}
    </div>
    
  )
}

export default ProductPage
