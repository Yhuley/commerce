import { 
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS
} from "./user.actions"

const initialState = { currentUser: null, error: null }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case SIGN_IN_ERROR :
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }

}

export default userReducer