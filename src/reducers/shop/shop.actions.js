import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils"
import { getDocs, collection } from "@firebase/firestore"

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START"
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS"
export const FETCH_COLLECTIONS_ERROR = "IS_FETCH_COLLECTIONS_ERROR"

export const fetchCollectionsStart = () => ({ type: FETCH_COLLECTIONS_START })

export const fetchCollectionsSuccess = collectionsMap => ({ type: FETCH_COLLECTIONS_SUCCESS, payload: collectionsMap })

export const fetchCollectionsError = errorMessage => ({ type: FETCH_COLLECTIONS_ERROR, payload: errorMessage })

export const fetchCollectionsStartAsync = () => async dispatch => {
    try {
        const collectionRef = collection(db, "collections")

        dispatch(fetchCollectionsStart())

        const docSnap = await getDocs(collectionRef);
        const collectionMap = convertCollectionSnapshotToMap(docSnap)
        
        dispatch(fetchCollectionsSuccess(collectionMap))
    } catch (error) {
        dispatch(fetchCollectionsError(error.message))
    }
}