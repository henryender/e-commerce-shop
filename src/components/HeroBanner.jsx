import React from 'react'

import BlackSound from '../assets/BlackSound.webp'
import { Link } from 'react-scroll'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container" id='top'>
      <div>
        <h3 className="beats-solo">Store</h3>
        <h3>Headphone</h3>
        <h1>Zara</h1>
        <img src={BlackSound} alt="headphones" className="hero-banner-image" />

        <div>
            <Link
                activeClass="active"
                to='shop'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               <button type="button" >shop now</button> 
              </Link>
          
          <div className="desc">
            <h5>Delivers Nation wide</h5>
            <p>Quality and amazing products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
