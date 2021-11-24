import { ADD_ITEM_TO_CART } from "./actions"
import { addItemToCart } from "./cart.utils"

const initialState = { cartItems: [] }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default :
            return state
    }
}

export default cartReducer