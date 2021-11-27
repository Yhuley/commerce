import { ADD_ITEM_TO_CART, CALCULATE_TOTAL_COUNT, DECREASE_ITEM, REMOVE_ITEM_FROM_CART } from "./actions"
import { addItemToCart, decreaseItem } from "./cart.utils"

const initialState = { cartItems: [], totalCount: 0, totalPrice: 0 }

const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_ITEM_TO_CART :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)               
            }

        case REMOVE_ITEM_FROM_CART : 
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        case DECREASE_ITEM :
            return {
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }
        case CALCULATE_TOTAL_COUNT : 
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