import { 
    SET_CURRENT_USER,
    GOOGLE_SIGN_IN_START,
    GOOGLE_SIGN_IN_SUCCESS,
    GOOGLE_SIGN_IN_ERROR,
    EMAIL_SIGN_IN_START,
    EMAIL_SIGN_IN_SUCCESS,
    EMAIL_SIGN_IN_ERROR
} from "./user.actions"

const initialState = { currentUser: null, error: null }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN_SUCCESS :
        case EMAIL_SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case GOOGLE_SIGN_IN_ERROR :
        case EMAIL_SIGN_IN_ERROR :
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }

}

export default userReducer