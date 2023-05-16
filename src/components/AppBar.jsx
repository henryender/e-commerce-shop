import React from 'react'

import { AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

function AppBar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  console.log(showCart)
  return (
    <>
      <div className="navbar-container">
      <p className="logo">
        <Link href="/">Zara Headphones</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>



      
    </>
  )
}

export default AppBar