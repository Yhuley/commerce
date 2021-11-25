import { ADD_ITEM_TO_CART } from "./actions"
import { addItemToCart } from "./cart.utils"

const initialState = { cartItems: [], totalCount: 0 }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                totalCount: state.cartItems.reduce((acc, cartItem) => acc + cartItem.count, 1)
            }
        default :
            return state
    }
}

export default cartReducer