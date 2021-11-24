import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import cartReducer from "../../reducers/cart.reducer";

const CartIcon = () => {
    const [itemsCount, setItemsCount] = useState(0)
    const { cartReducer: { cartItems }} = useSelector(state => state)

    useEffect(() => {
        setItemsCount(cartItems.reduce((acc, cartItem) => acc + cartItem.count, 0))
    }, [cartItems])
    
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

export default CartIcon