export const addItemToCart = async (cartItems, cartItemToAdd) => {
    const existingCartItems = await cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id && cartItem.name === cartItemToAdd.name
    )

    if (existingCartItems) {
         
        return await cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, count: cartItem.count + 1 }  
            : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, count: 1 }]
}