import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] })

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function addItem(product, count) {
        const newCart = [...cart]

        newCart.push({ ...product, count })

        setCart(newCart)
    }

    function removeItem(id) {
        setCart(cart.filter(x => x.id != id))
    }

    function countItems() {
        let total = 0
        cart.forEach(x => {
            total += x.count
        })
        return total
    }

    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, countItems }}>
            {children}
        </cartContext.Provider>
    )
}
