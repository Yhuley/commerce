import React from "react";
import { useSelector } from "react-redux";
import "./shopping-cart-page.styles.scss";

const ShoppingCartPage = () => {
    const { cartItems } = useSelector(state => state.cartReducer)
    const { totalPrice } = useSelector(state => state.cartReducer)

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