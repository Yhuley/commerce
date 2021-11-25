import React from "react";
import "./shopping-cart-page.styles.scss";

const ShoppingCartPage = () => {

    return (
        <div className="shopping-cart">
            <div className="header">
                <div className="header-block">
                    <p>Product</p>
                </div>
                <div className="header-block">
                    <p>Description</p>
                </div>
                <div className="header-block">
                    <p>Amount</p>
                </div>
                <div className="header-block">
                    <p>Price</p>
                </div>
                <div className="header-block">
                    <p>Remove</p>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage