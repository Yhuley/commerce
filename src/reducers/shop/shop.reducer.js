import { UPDATE_COLLECTIONS } from "../actions"
import SHOP_DATA from "./shop.data"

const initialState = {collections: SHOP_DATA}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COLLECTIONS :
            return {
                ...state,
                collections: action.payload
            }
        default :
            return state
    }
}

export default shopReducer