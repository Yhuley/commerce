export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START"
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START"
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_ERROR = "SIGN_IN_ERROR"
export const CHECK_USER_SESSION = "CHECK_USER_SESSION"
export const SIGN_OUT_START = "SIGN_OUT_START"
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS"
export const SIGN_OUT_ERROR = "SIGN_OUT_ERROR"
export const SIGN_UP_START = "SIGN_UP_START"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_ERROR = "SIGN_UP_ERROR"

export const googleSignInStart = () => ({type: GOOGLE_SIGN_IN_START})
export const emailSignInStart = ( email, password ) => ({type: EMAIL_SIGN_IN_START, payload: { email, password }})

export const signInSuccess = user => ({type: SIGN_IN_SUCCESS, payload: user})
export const signInError = error => ({type: SIGN_IN_ERROR, payload: error})

export const checkUserSession = () => ({type: CHECK_USER_SESSION})

export const signOutStart = () => ({type: SIGN_OUT_START})
export const signOutSuccess = () => ({type: SIGN_OUT_SUCCESS})
export const signOutError = error => ({type: SIGN_OUT_ERROR, payload: error})

export const signUpStart = user => ({type: SIGN_UP_START, payload: user})
export const signUpSuccess = ({ user, additionalData }) => ({type: SIGN_UP_SUCCESS, payload: { user, additionalData }})
export const signUpError = error => ({type: SIGN_UP_ERROR, payload: error})