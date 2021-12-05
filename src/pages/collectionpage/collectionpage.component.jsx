import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./collectionpage.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import Loading from "../../components/loading/loading.component";

import { fetchCollectionsStart } from "../../reducers/shop/shop.actions";

const CollectionPage = () => {
    const params = useParams()
    const { collections } = useSelector(state => state.shopReducer)
    
    const dispatch = useDispatch()

    useEffect(() => {
        if (!collections) {
            dispatch(fetchCollectionsStart())
        }      
    }, [])
    
    const collection = collections ? collections[params.collection] : null

    return (
        <div className="collection-page">
            {!!!collections ? (
                <Loading />
            ) : (
                <>
                    <h2 className="title">{collection.title}</h2>
                    <div className="items">
                        {collection.items.map(item => <CollectionItem key={item.id} item={item}/>)}
                    </div>
                </>
            )}
        </div>
    )
}

export default CollectionPage