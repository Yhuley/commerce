export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"

export const setCurrentUserActionCreator = user => ({type: SET_CURRENT_USER, payload: user})
export const addItemToCart = item => ({type: ADD_ITEM_TO_CART, payload: item})