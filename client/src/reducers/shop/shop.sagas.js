import { put, takeLatest, call, all } from 'redux-saga/effects';

import { db, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils"
import { getDocs, collection } from "@firebase/firestore"

import { 
    FETCH_COLLECTIONS_START,
    fetchCollectionsSuccess, 
    fetchCollectionsError 
} from "./shop.actions";

function* fetchCollectionsAsync() {

    try {
        const collectionRef = collection(db, "collections")
        const docSnap = yield getDocs(collectionRef)
        
        const collectionsMap = yield call(convertCollectionSnapshotToMap, docSnap)
        
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsError(error.message))
    }
}

function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}