import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ setIsCartVisible }) => {
    const { cartItems } = useSelector(state => state.cartReducer)
    const myRef = useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setIsCartVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
        <div className="cart-dropdown" ref={myRef}>
            <div className="cart-items">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}    
            </div>
            <CustomButton>GO SHOPPING CART</CustomButton>
        </div>
    )
}

export default CartDropdown