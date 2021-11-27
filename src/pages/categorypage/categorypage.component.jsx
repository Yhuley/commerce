import React from "react";
import { useParams } from "react-router-dom";
import "./categorypage.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = () => {
    const params = useParams()
    
    return (

        <div className="category">
            <h2>Category Page</h2>

        </div>
    )
}

export default CategoryPage