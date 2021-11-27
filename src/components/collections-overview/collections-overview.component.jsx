import React from "react";
import { Link, Outlet } from "react-router-dom"
import "./collections-overview.styles.scss";
import { useSelector } from "react-redux"; 
import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionsOverview = () => {
    const { collections } = useSelector(state => state.shopReducer)

    const collectionsForPreview = Object.keys(collections).map(key => collections[key])

    return (
        <div className="collections-overview">
            {
                collectionsForPreview.map(({id, ...oterProps}) => (
                    <PreviewCollection key={id} {...oterProps}/>
                ))
            }
        </div>
    )
}

export default CollectionsOverview