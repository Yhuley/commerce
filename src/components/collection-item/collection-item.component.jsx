import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItemToCart,  calculateTotalCount } from "../../reducers/actions";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItemToCart(item))
        dispatch(calculateTotalCount(item))
    }

    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${imageUrl})`}}    
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={addToCart} inverted>Add to cart</CustomButton>
        </div>
    )
}

export default CollectionItem