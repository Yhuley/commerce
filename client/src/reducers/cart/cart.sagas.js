import { all, takeLatest, put, call } from "redux-saga/effects"

import { clearCart } from "./cart.actions"
import { SIGN_OUT_SUCCESS } from "../user/user.actions"

function* clearCartOnSignOut() {
    yield put(clearCart())
}

function* onSignOutSucces() {
    yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSucces)
    ])
}