import React, { useState} from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
const [ collections, setColllecions] = useState(SHOP_DATA)
    
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