import { ADD_ITEM_TO_CART } from "./actions"
import { addItemToCart } from "./cart.utils"

const initialState = { cartItems: [], totalCount: 0, totalPrice: 0 }

const cartReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
                totalCount: state.cartItems.reduce((acc, prev) => acc + prev.count, 1),
                totalPrice: state.cartItems.reduce((acc, prev) => acc + prev.count * action.payload.price, action.payload.price)
            }
        default :
            return state
    }
}

export default cartReducer