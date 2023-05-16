import React from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
import { Toaster } from 'react-hot-toast';

const ProductDetails = ({product}) => {
    const [index, setIndex] = React.useState(0)
    const { image, name, details, price } = product;
    const { decQty, incQty, qty, onAdd, setShowCart,showCart } = useStateContext();

    const handleBuyNow = () => {
     
    setShowCart(true);
      }
  return (
    
    <div className="product-detail-container" >
      <Toaster position='top-center' reverseOrder={false}/>
      <div>
        <div className="image-container">
          <img src={image && image} className="product-detail-image" alt=''/>
        </div>
        <div className="small-images-container" >
          {product.imageC?.map((item, i) => 
          (<><img 
              key={i}
              src={item[index]}
              alt=""
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
            /></>
        
          ))}
        </div>
      </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>

          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
            
          </div>
        </div>
        {showCart && <Cart />}
      </div>
  )
}

export default ProductDetails
