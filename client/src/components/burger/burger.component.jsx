import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../reducers/user/user.actions";
import { Link } from "react-router-dom";
import "./burger.styles.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Burger = () => {
    const [sidebar, setSidebar] = useState(false)
    const [sidebarAnimClass, setSidebarAnimClass] = useState('showBurgerMenu')

    const { currentUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(signOutStart())
    }

    const hideSidebar = () =>{
        setSidebarAnimClass('hideBurgerMenu')
        setTimeout(() => {
            setSidebarAnimClass('showBurgerMenu')
            setSidebar(false)
        }, 300)
    }

    return (
        <div className={`burger-container `}>
            <div className="burger-bars" onClick={() => setSidebar(!sidebar)}>
                {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
            </div>
            {sidebar && <div className={`nav-menu ${sidebarAnimClass}`}>
                <ul className="nav-menu-items">
                    <li className="nav-menu-item" onClick={hideSidebar}>
                        <Link to="/">
                            <AiIcons.AiOutlineHome /> Home
                        </Link>
                    </li>
                    <li className="nav-menu-item" onClick={hideSidebar}>
                        <Link to="/shop">
                            <AiIcons.AiOutlineShop /> Shop
                        </Link>
                    </li>
                    <li className="nav-menu-item" onClick={hideSidebar}>
                        <Link to="/about">
                            <AiIcons.AiOutlineTeam /> About Us
                        </Link>
                    </li>
                    <li className="nav-menu-item" onClick={hideSidebar}>
                        {
                            currentUser ?
                            <div onClick={signOut}>
                                <AiIcons.AiOutlineLogout />Sign Out
                            </div>
                            :
                            <Link to="/signin">
                                <AiIcons.AiOutlineLogin />Sign In
                            </Link>
                        }
                    </li>
                    <li className="nav-menu-item" onClick={hideSidebar}>
                        <Link to="/shoppingcart">
                            <AiIcons.AiOutlineShoppingCart /> Shopping Cart
                        </Link>
                    </li>
                </ul>
            </div>}        
        </div>
    )
}

export default Burger