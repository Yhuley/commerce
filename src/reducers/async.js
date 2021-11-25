export const countAsync = async (cartItems) => {
    return await cartItems.reduce((prev, cur) => prev + cur.count, 1)
}