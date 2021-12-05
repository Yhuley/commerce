import { takeLatest, put, all, call } from "redux-saga/effects"

import { googleSignInSuccess, googleSignInError, GOOGLE_SIGN_IN_START } from "./user.actions"

import { getDoc } from "firebase/firestore";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

function* signInWithGoogle() {
    const provider = new GoogleAuthProvider()

    try {
        const { user } = yield signInWithPopup(auth, provider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnap = yield getDoc(userRef)
        yield put(googleSignInSuccess({ id: userSnap.id, ...userSnap.data() }))
    } catch (error) {
        put(googleSignInError(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ])
}