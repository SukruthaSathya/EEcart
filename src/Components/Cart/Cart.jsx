import React from 'react'
import './Cart.css'

function Cart() {
  return (
    <div className='cart-wrapper'>
        <h1 className='cart-title'>YOUR BAG</h1>
        <div className="cart-top">

            <button id='continue'>CONTINUE SHOPPING</button>
            <div className="top-texts">
                <span>Shopping Bag (2)</span>
                <span>Your Wishlist (0)</span>
            </div>
            <button id='checkout'>EMPTY BAG</button>
           
        </div>
        <div className='cart-bottom'>
            <div className="cart-info">
                <div className="cart-product">
                    <div className="cart-productDetails">
                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg" alt="" />
                        <div className="details">
                            <span> <b>Product:</b> SUMMER SHOES</span>
                            <span> <b>ID:</b> 66482642755</span>
                            <div className='prod-color'></div>
                            <span> <b>Size:</b>37</span>
                        </div>
                    </div>
                    <div className="cart-priceDetails">
                        <div className="prod-amountContainer">
                            <i className='fa fa-plus'></i>
                            <div className="prod-amount">2</div>
                            <i className='fa fa-minus'></i>
                        </div>
                        <div className="prod-price">
                            $30
                        </div>
                    </div>
                </div>
                <hr />
                <div className="cart-product">
                    <div className="cart-productDetails">
                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619487269-tr3mmst080-shoe-angle-global-mens-tree-runner-mist-white-b11537e4-5c45-4443-a1dd-c70c31779715-png-1619487255.jpg" alt="" />
                        <div className="details">
                            <span> <b>Product:</b> SUMMER SHOES</span>
                            <span> <b>ID:</b> 66482642755</span>
                            <div className='prod-color'></div>
                            <span> <b>Size:</b>37</span>
                        </div>
                    </div>
                    <div className="cart-priceDetails">
                        <div className="prod-amountContainer">
                            <i className='fa fa-plus'></i>
                            <div className="prod-amount">2</div>
                            <i className='fa fa-minus'></i>
                        </div>
                        <div className="prod-price">
                            $30
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-summary">
                <h1>ORDER SUMMARY</h1>
                <div className="summary-item">
                    <span>Subtotal</span>
                    <span>$80</span>
                </div>
                <div className="summary-item">
                    <span>Estimated Shipping</span>
                    <span>$5.90</span>
                </div>
                <div className="summary-item">
                    <span>shipping Discount</span>
                    <span>$-5.90</span>
                </div>
                <div className="summary-item" id='total-price'>
                    <span>Total</span>
                    <span>$80</span>
                </div>
                <button>CHECKOUT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Cart