import { useSelector } from "react-redux";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
    const { cartReducer: { totalCount }} = useSelector(state => state)

    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalCount}</span>
        </div>
    )
}

export default CartIcon