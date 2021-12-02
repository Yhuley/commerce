import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./collectionpage.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import Loading from "../../components/loading/loading.component";

const CollectionPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    const { collections } = useSelector(state => state.shopReducer)

    const collection = collections ? collections[params.collection] : null

    useEffect(() => {
        
        setIsLoading(false)
    }, [])
    console.log(collection)
    return (
        <div className="collection-page">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h2 className="title">{collection.title}</h2>
                    <div className="items">
                        {
                            collection.items.map(item => <CollectionItem key={item.id} item={item}/>)
                        }
                    </div>
                </>
            )
            }
            
        </div>
    )
}

export default CollectionPage