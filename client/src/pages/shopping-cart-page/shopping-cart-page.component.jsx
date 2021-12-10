import React from "react";
import { useSelector } from "react-redux";
import ShoppingCartItem from "../../components/shopping-car-item/shopping-cart-item.component";
import "./shopping-cart-page.styles.scss";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const ShoppingCartPage = () => {
    const { cartItems, totalPrice } = useSelector(state => state.cartReducer)

    return (
        <div className="shopping-cart">
            <div className="cart-header">
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
            {
                cartItems.map(cartItem => (
                    <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">
                <span>TOTAL PRICE: {totalPrice}</span>
            </div>
            
            {!!totalPrice && 
                <div className="test-warning">
                    <StripeButton price={totalPrice}/>
                    <br />
                    *Please use this test card for payments:
                    <br />
                    4242 4242 4242 4242 - Exp: 01/30 - CVV: 123 
                </div>
            }
        </div>
    )
}

export default ShoppingCartPage