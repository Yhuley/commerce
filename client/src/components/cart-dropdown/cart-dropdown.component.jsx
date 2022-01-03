import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ setIsCartVisible }) => {
    const navigate = useNavigate()
    const { cartItems } = useSelector(state => state.cartReducer)
    const cart = useRef();

    const handleClick = () => {
        setIsCartVisible(false)
        navigate("shoppingcart")
    }

    const handleClickOutside = e => {
        if (!cart.current.contains(e.target)) {
            setIsCartVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    return (
        <div className="cart-dropdown" ref={cart}>
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your shopping cart is empty</span>
                }    
            </div>
            <CustomButton onClick={handleClick}>GO TO SHOPPING CART</CustomButton>
        </div>
    )
}

export default CartDropdown