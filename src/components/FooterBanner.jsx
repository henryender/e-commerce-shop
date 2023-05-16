import React from 'react'

import Blackheadset from '../assets/Blackheadset.webp'
import { animateScroll  as scroll} from 'react-scroll'

const FooterBanner = () => {
  const top=()=>{
   scroll.scrollToTop('top')
  }
 
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>5% Discount of all Purchases</p>
          <h3>Hot Deals</h3>
          <h3>Black Friday</h3>
          <p>14th November</p>
        </div>
        <div className="right">
          <p>Make a purchase today</p>
          <h3>Deals</h3>
          <p>Newly Arrived Products</p>
          
            <button type="button" style={{marginLeft:'30px'}} onClick={top}>Claim offer</button>
       
        </div>

        <img 
          src={Blackheadset} className="footer-banner-image" alt=''
        />
      </div>
    </div>
  )
}

export default FooterBanner
