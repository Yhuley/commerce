import React from "react";
import { useSelector } from "react-redux"
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const ShopPage = () => {
const { collections } = useSelector(state => state.shopReducer)
    
    return (
        <div className="shop-page">
            {
                collections.map(({id, ...oterProps}) => (
                    <PreviewCollection key={id} {...oterProps}/>
                ))
            }
        </div>
    )
}

export default ShopPage