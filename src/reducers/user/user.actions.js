export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START"
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START"
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_ERROR = "SIGN_IN_ERROR"
export const CHECK_USER_SESSION = "CHECK_USER_SESSION"

export const googleSignInStart = () => ({type: GOOGLE_SIGN_IN_START})
export const emailSignInStart = ( email, password ) => ({type: EMAIL_SIGN_IN_START, payload: { email, password }})
export const signInSuccess = user => ({type: SIGN_IN_SUCCESS, payload: user})
export const signInError = error => ({type: SIGN_IN_ERROR, payload: error})
export const checkUserSession = () => ({type: CHECK_USER_SESSION})