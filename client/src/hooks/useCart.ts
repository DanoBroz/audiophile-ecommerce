export const useCart = () => {
    const removeCartData = () => {
        return localStorage.setItem('cart', '')
    }

    return {
        removeCartData,
    }
}
