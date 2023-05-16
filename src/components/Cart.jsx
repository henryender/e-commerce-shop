import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';


import { useStateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

const Cart = () => {
    const navigate = useNavigate()
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

    const success = () => {
        navigate('/success')
    }

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <Toaster position='top-center' reverseOrder={false}/>
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShopping size={150} />
                        <h3>Your shopping bag is empty</h3>
                        <Link href="/">
                            <button
                                type="button"
                                onClick={() => setShowCart(false)}
                                className="btn"
                            >
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item?.image} className="cart-product-image" alt='item' />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item?.name}</h5>
                                    <h4>${item?.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <p className="quantity-desc">
                                            <span className="minus" onClick={() => toggleCartItemQuanitity(item.id, 'dec')}>
                                                <AiOutlineMinus />
                                            </span>
                                            <span className="num" >{item?.quantity}</span>
                                            <span className="plus" onClick={() => toggleCartItemQuanitity(item.id, 'inc')}><AiOutlinePlus /></span>
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="remove-item"
                                        onClick={() => onRemove(item)}
                                    >
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 && (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn" onClick={success}>
                                Pay Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart