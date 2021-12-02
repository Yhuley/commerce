export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"
export const DECREASE_ITEM = "DECREASE_ITEM"
export const CALCULATE_TOTAL_COUNT = "CALCULATE_TOTAL_COUNT"
export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS"

export const setCurrentUserActionCreator = user => ({type: SET_CURRENT_USER, payload: user})
export const addItemToCart = item => ({type: ADD_ITEM_TO_CART, payload: item})
export const removeItemFromCart = item => ({type: REMOVE_ITEM_FROM_CART, payload: item})
export const decreaseItem = item => ({type: DECREASE_ITEM, payload: item})
export const calculateTotalCount = () => ({type: CALCULATE_TOTAL_COUNT})
export const updateCollections = collectionsMap => ({type: UPDATE_COLLECTIONS, payload: collectionsMap})