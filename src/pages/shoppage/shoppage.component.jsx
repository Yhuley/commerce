import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { collection, onSnapshot } from "firebase/firestore";
import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

const ShopPage = () => {
    const unsubscribeFromSnapshot = null

    useEffect(() => {
        const collectionRef = collection(db, "collections")

        onSnapshot( collectionRef, doc => { 
            convertCollectionSnapshotToMap(doc)
        });
    }, [])

    return (
        <div className="shop-page">
           <CollectionsOverview />
        </div>
    )
}

export default ShopPage