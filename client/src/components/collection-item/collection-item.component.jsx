import { useState } from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart,  calculateTotalCount } from "../../reducers/cart/cart.actions";
import Loading from "../loading/loading.component";

const CollectionItem = ({ item }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { currentUser } = useSelector(state => state.userReducer)
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItemToCart(item))
        dispatch(calculateTotalCount())
    }

    return (
        <div className="collection-item">
            {isLoading && <Loading />}
            <img 
                onLoad={() => setIsLoading(false)}
                className="image"
                src={imageUrl}
                alt={name}
            />
            <div className="collection-footer">
                <span className="name"  onClick={() => setIsLoading(false)}>{name}</span>
                <span className="price">{price}</span>
            </div>
            {currentUser && <CustomButton onClick={addToCart} inverted>Add to cart</CustomButton>}
        </div>
    )
}

export default CollectionItem