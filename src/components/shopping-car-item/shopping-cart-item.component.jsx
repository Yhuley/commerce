import React from "react";
import "./shopping-cart-item.styles.scss";

const ShoppingCartItem = ({ name, imageUrl, price, count }) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="cart-item" />
            </div>
            <span className="name">{name}</span>
            <span className="count">{count}</span>
            <span className="price">{price}</span>
            <button className="remove-button">&#215;</button>
        </div>
    )
}

export default ShoppingCartItem