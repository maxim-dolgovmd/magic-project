export const CardFromLockalStorage = () => {
    const cart = 
        typeof window === "undefined" ? "" : window.localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(cart) || []
    }
}