export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems = cartItems.find(cartItem => 
        cartItem.id === cartItemToAdd.id && cartItem.name === cartItemToAdd.name
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

export const decreaseItem = (cartItems, itemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem =>
        cartItem.id === itemToDecrease.id && cartItem.name === itemToDecrease.name
    )

    if (existingCartItem.count === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToDecrease.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === itemToDecrease.id ? 
        {...itemToDecrease, count: cartItem.count - 1} : cartItem    
    )
}