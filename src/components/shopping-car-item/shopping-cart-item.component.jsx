import React from "react";
import "./shopping-cart-item.styles.scss";
import { useDispatch } from "react-redux";
import { calculateTotalCount, removeItemFromCart, decreaseItem, addItemToCart } from "../../reducers/actions";

const ShoppingCartItem = ({cartItem}) => {
    const { name, imageUrl, price, count } = cartItem
    const dispatch = useDispatch()

    const removeItem = () => {
        dispatch(removeItemFromCart(cartItem))
        dispatch(calculateTotalCount())    
    }

    const decrease = () => {
        dispatch(decreaseItem(cartItem))
        dispatch(calculateTotalCount())
    }

    const increase = () => {
        dispatch(addItemToCart(cartItem))
        dispatch(calculateTotalCount())
    }
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="cart-item" />
            </div>
            <span className="name">{name}</span>
            <span className="count">
                <div className="arrow" onClick={decrease}>&#60;</div>
                    {count}
                <div className="arrow" onClick={increase}>&#62;</div>
            </span>
            <span className="price">{price}</span>
            <button className="remove-button" onClick={removeItem}>&#215;</button>
        </div>
    )
}

export default ShoppingCartItem