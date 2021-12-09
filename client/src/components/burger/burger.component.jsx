import React from "react";
import { Link } from "react-router-dom";
import "./burger.styles.scss";

const Burger = ({ currentUser, signOut }) => {
    return (
        <>
            <input id="burger" type="checkbox" />
            <label for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav>
                <ul>
                    <Link to="/" className="menu-item">
                        HOME
                    </Link>
                    <Link to="/shop" className="menu-item">
                        SHOP
                    </Link>
                    <Link to="/contact" className="menu-item">
                        CONTACT US
                    </Link>
                    {
                        currentUser ?
                        <div className="menu-item" onClick={signOut}>
                            SIGN OUT
                        </div>
                        :
                        <Link className="menu-item" to="/signin">
                            SIGN IN
                        </Link>   
                    }
                    <Link to="/shoppingcart" className="menu-item">
                        SHOPPING CART
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Burger