import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./collectionpage.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { fetchCollectionsStartAsync } from "../../reducers/shop/shop.actions";

const CollectionPage = () => {
    const params = useParams()
    const { collections } = useSelector(state => state.shopReducer)

    const collection = collections ? collections[params.collection] : {}

    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {collection.items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default CollectionPage