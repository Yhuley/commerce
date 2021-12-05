import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.styles.scss";
import  { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/valentines-clothes.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { signOutStart } from "../../reducers/user/user.actions";

const Header = () => {
    const [isCartVisible, setIsCartVisible] = useState(false)
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.userReducer)

    const signOut = () => {
        dispatch(signOutStart())
    }

    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    <Logo className="logo" />
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={signOut}>
                       SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
                <div onClick={() => setIsCartVisible(true)} >
                    <CartIcon />
                </div>
                
            </div>
            {isCartVisible && <CartDropdown setIsCartVisible={setIsCartVisible}/>}
        </div>
    )
}

export default Header;