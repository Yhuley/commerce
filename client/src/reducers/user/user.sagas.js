import { takeLatest, put, all, call } from "redux-saga/effects"

import { 
    signInError, 
    signInSuccess,
    signOutSuccess,
    signOutError,
    signUpError,
    signUpSuccess,
    GOOGLE_SIGN_IN_START, 
    EMAIL_SIGN_IN_START, 
    CHECK_USER_SESSION,
    SIGN_OUT_START,
    SIGN_UP_START,
    SIGN_UP_SUCCESS
} from "./user.actions"

import { getDoc } from "firebase/firestore";
import { auth, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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

function* onGoogleSignInStart() {
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

function* onEmailSignInStart() {
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

function* onCheckUserSession() {
    yield takeLatest(CHECK_USER_SESSION, isUserAuth)
}

function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutError(error))
    }
}

function* onSignOutStart() {
    yield takeLatest(SIGN_OUT_START, signOut)
}

function* signUp({ payload: { displayName, email, password }}) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password)
        yield put (signUpSuccess({ user, additionalData: { displayName } }))
    } catch(error) {
        yield put(signUpError(error))
    }
}
function* onSignUpStart() {
    yield takeLatest(SIGN_UP_START, signUp)
}

function* signInAfterSignUp({ payload: { user, additionalData }}) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData)
        const userSnap = yield getDoc(userRef)
        yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }))
    } catch(error) {
        yield put(signInError(error))
    }
}

function* onSignUpSuccess() {
    yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() { 
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}