import React from 'react'
import { Product, HeroBanner, FooterBanner, Footer, AppBar } from './index'
import { products } from '../data'

const Home = ({qty}) => {
  return (
    <div>
      <AppBar qty={qty}/>
      <HeroBanner />
        <div className="products-heading" >
          <h2 id="shop">Best Seller Products  </h2>
          <p>Speakers of many variations passages</p>

          {/* <Link >
            <button type="button"
              style={{
                backgroundColor: "red",
                padding: '8px',
                borderRadius: '20px',
                width: "100px", color: 'white'
              }}>Back to Top</button>
          </Link> */}

        </div>

        <div className="products-container">
          {products?.map((product,i) => <Product key={i} product={product} />)}
        </div>

        <FooterBanner />
        <Footer/>
    </div>
  )
}

export default Home
