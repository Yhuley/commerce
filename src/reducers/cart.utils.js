export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id && cartItem.name === cartItemToAdd.name
    )

    if (existingCartItems) {
         
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, count: cartItem.count + 1 }  
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, count: 1 }]
}