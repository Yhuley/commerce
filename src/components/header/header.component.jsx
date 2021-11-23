import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./header.styles.scss";
import  { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
    const [isCartVisible, setIsCartVisible] = useState(false)
    const currentUser = useSelector(state => state.userReducer.currentUser)

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                       SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
                <div onClick={() => setIsCartVisible(!isCartVisible)}>
                    <CartIcon  />
                </div>
                
            </div>
            {isCartVisible && <CartDropdown />}
        </div>
    )
}

export default Header;