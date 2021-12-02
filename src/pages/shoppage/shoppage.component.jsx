import React, { useState, useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { collection, onSnapshot } from "firebase/firestore";
import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../reducers/actions";
import Loading from "../../components/loading/loading.component";

const ShopPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const collectionRef = collection(db, "collections")

        const unsubscribeFromSnapshot = onSnapshot( collectionRef, async doc => { 
            const collectionMap = convertCollectionSnapshotToMap(doc)
            dispatch(updateCollections(collectionMap))
            setIsLoading(false)
        });

        return () => unsubscribeFromSnapshot()
    }, [])

    return (
        <div className="shop-page">
           {isLoading ? <Loading /> : <CollectionsOverview />}
        </div>
    )
}

export default ShopPage