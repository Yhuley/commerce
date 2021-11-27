import React from "react";
import "./collections-overview.styles.scss";
import { useSelector } from "react-redux"; 
import PreviewCollection from "../preview-collection/preview-collection.component";

const CollectionsOverview = () => {
    const { collections } = useSelector(state => state.shopReducer)

    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...oterProps}) => (
                    <PreviewCollection key={id} {...oterProps}/>
                ))
            }
        </div>
    )
}

export default CollectionsOverview