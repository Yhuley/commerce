export const SET_CURRENT_USER = "SET_CURRENT_USER"

export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START"
export const GOOGLE_SIGN_IN_SUCCESS = "GOOGLE_SIGN_IN_SUCCESS"
export const GOOGLE_SIGN_IN_ERROR = "GOOGLE_SIGN_IN_ERROR"

export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START"
export const EMAIL_SIGN_IN_SUCCESS = "EMAIL_SIGN_IN_SUCCESS"
export const EMAIL_SIGN_IN_ERROR = "EMAIL_SIGN_IN_ERROR"

export const setCurrentUser = user => ({type: SET_CURRENT_USER, payload: user})

export const googleSignInStart = () => ({type: GOOGLE_SIGN_IN_START})
export const googleSignInSuccess = user => ({type: GOOGLE_SIGN_IN_SUCCESS, payload: user})
export const googleSignInError = error => ({type: GOOGLE_SIGN_IN_ERROR, payload: error})

export const emailSignInStart = emailAndPassword => ({type: EMAIL_SIGN_IN_START, payload: emailAndPassword})
export const emailSignInSuccess = user => ({type: EMAIL_SIGN_IN_SUCCESS, payload: user})
export const emailSignInError = error => ({type: EMAIL_SIGN_IN_ERROR, payload: error})