import { ADD_ITEM_TO_CART } from "./actions"
import { addItemToCart } from "./cart.utils"
import { countAsync } from "./async"

const initialState = { cartItems: [], totalCount: 0, totalPrice: 0 }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                totalCount: console.log(state.cartItems)
            }
        default :
            return state
    }
}

export default cartReducer