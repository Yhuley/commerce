import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_ERROR } from "./shop.actions"

const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: ""
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START :
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS :
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            }
        case FETCH_COLLECTIONS_ERROR :
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default :
            return state
    }
}

export default shopReducer