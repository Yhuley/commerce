import React from "react";
import { useSelector } from "react-redux";
import "./header.styles.scss";
import  { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

const Header = () => {
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
                <CartIcon />
            </div>
        </div>
    )
}

export default Header;