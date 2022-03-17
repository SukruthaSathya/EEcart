import React from 'react'
import './ProductDetails.css'

function ProductDetails() {
    return (
        <div className="main-container">
            <div className="go-back" id='prod-Details'><i className='fa fa-arrow-left'></i></div>
            <div className="prod-wrapper">

                <div className="prod-ImgContainer">
                    <img src="https://cdn.shopify.com/s/files/1/0550/1471/9545/products/9-3-21-PartII177236_360x.jpg?v=1634455955" alt="" />
                </div>
                <div className="prod-InfoContainer">
                    <h1>Denim Jumpsuit</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <span>$ 20.0</span>
                    <div className="filter-container">
                        <div className="prod-filter" id='prod-filter-color'>
                            <span>Color</span>
                            <div className="filter-color" id='black'>
                            </div>
                            <div className="filter-color" id='blue'>
                            </div>
                            <div className="filter-color" id='grey'>
                            </div>
                        </div>
                        <div className="amount-container">
                            <i className='fa fa-minus'></i>
                            <span>1</span>
                            <i className='fa fa-plus'></i>
                        </div>
                        <div className="prod-filter" id='prod-filter-size'>
                            <span>Size</span>
                            <select name="" id="">
                                <option value="">XS</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="add-container">

                        <button className=''>ADD TO CART</button>
                        <button>WISHLIST</button>
                    </div>
                    <div className='buy-prod'>
                        <button>BUY IT NOW</button>
                    </div>
                </div>

            </div>
            <div className="prod-review">
                <h2>Customer Reviews</h2>
                <div className='review'>
                    <div className="rating">
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <i className='fa fa-star-o'></i>
                        <span>No reviews yet</span>
                    </div>

                    <button>Write Review</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails