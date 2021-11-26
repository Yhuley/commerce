import { ADD_ITEM_TO_CART, INCREMENT_TOTAL_COUNT } from "./actions"
import { addItemToCart } from "./cart.utils"

const initialState = { cartItems: [], totalCount: 0, totalPrice: 0 }

const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)               
            }
        case INCREMENT_TOTAL_COUNT : 
            return {
                ...state,
                totalCount: state.cartItems.reduce((acc, prev) => acc + prev.count, 0),
                totalPrice: state.cartItems.reduce((acc, prev) => acc + prev.price * prev.count, 0)
            }
        default :
            return state
    }
}

export default cartReducer