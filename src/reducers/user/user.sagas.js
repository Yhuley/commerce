import { takeLatest, put, all, call } from "redux-saga/effects"

import { 
    signInError, 
    signInSuccess,
    GOOGLE_SIGN_IN_START, 
    EMAIL_SIGN_IN_START, 
    CHECK_USER_SESSION
} from "./user.actions"

import { getDoc } from "firebase/firestore";
import { auth, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

function* signInWithGoogle() {
    const provider = new GoogleAuthProvider()

    try {
        const { user } = yield signInWithPopup(auth, provider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnap = yield getDoc(userRef)
        yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }))
    } catch (error) {
        yield (signInError(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* signInWithEmail({ payload: { email, password }}) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnap = yield getDoc(userRef)
        yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }))
    } catch (error) {
        yield put(signInError(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

function* isUserAuth() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnap = yield getDoc(userRef)
        yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }))
    } catch(error) {
        yield put(signInError(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuth)
}

export function* userSagas() { 
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession)
    ])
}