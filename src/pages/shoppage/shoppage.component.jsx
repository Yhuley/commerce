import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { collection, onSnapshot } from "firebase/firestore";
import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { updateCollections } from "../../reducers/actions";

const ShopPage = () => {
    const dispatch = useDispatch()
    const unsubscribeFromSnapshot = null

    useEffect(() => {
        const collectionRef = collection(db, "collections")

        onSnapshot( collectionRef, async doc => { 
            const collectionMap = convertCollectionSnapshotToMap(doc)
            dispatch(updateCollections(collectionMap))
        });
    }, [])

    return (
        <div className="shop-page">
           <CollectionsOverview />
        </div>
    )
}

export default ShopPage